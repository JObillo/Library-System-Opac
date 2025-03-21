//gawa ni Jericho Pogi

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Books',
        href: '/books',
    },
];

export default function Books() {

    const { books } = usePage().props

    const {delete: destroy} = useForm();

    const destroyPost: FormEventHandler = (e, id) => {
        e.preventDefault();
        if(confirm("Are you sure want to remove this book")){
            destroy(route('books.destroy', id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Books" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <Link
                        href={route('books.create')}
                        className='px-6 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Add Books
                    </Link>
                </div>
                <div className="overflow-x-auto">
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark-text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">TITLE</th>
                            <th scope="col" className="px-6 py-3">AUTHOR</th>
                            <th scope="col" className="px-6 py-3">ISBN</th>
                            <th scope="col" className="px-6 py-3">COPIES AVAILABLE</th>
                            <th scope="col" className="px-6 py-3">ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                            {books.map(({id, title, author, isbn, copies_available}) => (
                            <tr 
                            key={id}
                            className='odd:bg-white odd:bd:bg-gray-900 even:bg-gray-50 even:dark:bg:bg-gray-800'>
                                <td className='px-6 py-2 font-medium text-gray-900 dark:text-white'>{id}</td>
                                <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{title}</td>
                                <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{author}</td>
                                <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{isbn}</td>
                                <td className='px-6 py-2 text-gray-600 dark:text-gray-300'>{copies_available}</td>
                                <td>

                                    <form onSubmit={(e) => destroyPost(e, id)}>
                                    <Link
                                        href={route('books.edit', id)}
                                        className='px-6 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                    >
                                        Edit
                                    </Link>
                                        <button className='px-6 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                                        delete</button>
                                    </form>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        
            </div>
        </AppLayout>
    );
}