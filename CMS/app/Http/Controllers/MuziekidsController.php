<?php

namespace App\Http\Controllers;

use App\Models\Muziekids;
use Illuminate\Http\Request;

class MuziekidsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('muziekids');
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
     * @param  \App\Models\Muziekids  $muziekids
     * @return \Illuminate\Http\Response
     */
    public function show(Muziekids $muziekids)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Muziekids  $muziekids
     * @return \Illuminate\Http\Response
     */
    public function edit(Muziekids $muziekids)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Muziekids  $muziekids
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Muziekids $muziekids)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Muziekids  $muziekids
     * @return \Illuminate\Http\Response
     */
    public function destroy(Muziekids $muziekids)
    {
        //
    }
}
