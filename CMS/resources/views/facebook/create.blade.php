@extends('layouts.app')

@section('title', 'Werknemer toevoegen')

@section('content')

<div class="row">
    <div class="col-12">
        <h1>Werknemer toevoegen</h1>
    </div>
</div>

<div class="row">
    <div class="col-12">
        <form action="/smoelenboek" method="POST" class="pb-5" enctype="multipart/form-data">
            @include('facebook.form')

            <div class="form-group pt-3">
                <button type="submit" class="btn btn-primary">Toevoegen</button>
            </div>

        </form>
    </div>
</div>

@endsection
