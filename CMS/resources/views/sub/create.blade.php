@extends('layouts.app')

@section('title', 'sub list')

@section('content')

<div class="row">
    <div class="col-12">
        <h1>Toevoegen</h1>
    </div>
</div>

<div class="row">
    <div class="col-12">

        <form action="/sub" method="POST" class="pb-5">
            @include('sub.form')

            <div class="form-group pt-3">
                <button type="submit" class="btn btn-primary">Voeg toe</button>
            </div>

        </form>

    </div>
</div>

@endsection
