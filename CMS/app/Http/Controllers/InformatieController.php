<?php

namespace App\Http\Controllers;

use App\Models\Informatie;
use Illuminate\Http\Request;

class InformatieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('information');
    }

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Informatie  $informatie
     * @return \Illuminate\Http\Response
     */
    public function show(Informatie $informatie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Informatie  $informatie
     * @return \Illuminate\Http\Response
     */
    public function edit(Informatie $informatie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Informatie  $informatie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Informatie $informatie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Informatie  $informatie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Informatie $informatie)
    {
        //
    }
}
