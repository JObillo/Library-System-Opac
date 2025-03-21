<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Book;



class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('books/index', [
            "books" => Book::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('books/addbook', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => "required",
            "author" => "required",
            "isbn" => "required",
            "copies_available" => "required"
        ]);

        Book::create([
            "title" => $request->title,
            "author" => $request->author,
            "isbn" => $request->isbn,
            "copies_available" => (int) $request->copies_available
        ]);

        return redirect()->route('books.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $book = Book::find($id);
        return Inertia::render('books/editbooks', [
            "book" => $book
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            "title" => "required",
            "author" => "required",
            "isbn" => "required",
            "copies_available" => "required"
        ]);

        $book = Book::find($id);

        $book->title = $request->title;
        $book->author = $request->author;
        $book->isbn = $request->isbn;
        $book->copies_available = $request->copies_available;

        $book->save();

        return redirect()->route('books.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Book::destroy($id);
        return redirect()->route('books.index');
    }
}
