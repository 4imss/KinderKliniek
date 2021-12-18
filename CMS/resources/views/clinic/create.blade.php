@extends('layouts.app')

@section('title', 'Poli toevoegen')

@section('content')

<div class="row">
    <div class="col-12">
        <h1>Poli toevoegen</h1>
    </div>
</div>

<div class="row">
    <div class="col-12">
        <form action="/poli" method="POST" class="pb-5">
            @include('clinic.form')

            <div class="form-group pt-3">
                <button type="submit" class="btn btn-primary">Voeg Poli toe</button>
            </div>

        </form>
    </div>
</div>

@endsection
