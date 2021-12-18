@extends('layouts.app')

@section('title', 'Informatie')

@section('content')

    <div class="row">
        <div class="col marginOverzicht">
            <h1>Poli overzicht</h1>
            <a class="btn btn-primary buttonPoli" href="/poli" role="button">Toevoegen</a>
        </div>

        <div class="col marginOverzicht">
            <h1>Sub overzicht</h1>
            <a class="btn btn-primary buttonSub" href="/sub" role="button">Toevoegen</a>
        </div>
    </div>

@endsection
