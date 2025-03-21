import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputError  from '@/components/input-error';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Books',
        href: '/books',
    },
];

export default function AddBooks() {

    const {data, setData, errors, post } = useForm({
        title: "",
        author: "",
        isbn: "",
        copies_available: ""
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('books.store'))
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Books" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <Link
                        href={route('books.index')}
                        className='px-6 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        back
                    </Link>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    < div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>

                        <Input
                            id="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            autoComplete="title"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>

                    < div className="grid gap-2">
                        <Label htmlFor="author">Author</Label>

                        <Input
                            id="author"
                            className="mt-1 block w-150"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            autoComplete="author"
                        />

                        <InputError className="mt-2" message={errors.author} />
                    </div>

                    < div className="grid gap-2">
                        <Label htmlFor="isbn">Isbn</Label>

                        <Input
                            id="isbn"
                            className="mt-1 block w-100"
                            value={data.isbn}
                            onChange={(e) => setData('isbn', e.target.value)}
                            autoComplete="isbn"
                        />

                        <InputError className="mt-2" message={errors.isbn} />
                    </div>

                    < div className="grid gap-2">
                        <Label htmlFor="copies_available">Copies Available</Label>

                        <Input
                            id="copies_available"
                            className="mt-1 block w-20"
                            value={data.copies_available}
                            onChange={(e) => setData('copies_available', e.target.value)}
                            autoComplete="copies_available"
                        />

                        <InputError className="mt-2" message={errors.copies_available} />
                    </div>

                    <div>
                        <Button>Add</Button>
                    </div>

                </form>
        
            </div>
        </AppLayout>
    );
}