@extends('layouts.app')

@section('title', 'Medewerker bewerken')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Medewerker bewerken</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <form action="/smoelenboek/{{ $facebook->id }}" method="POST" enctype="multipart/form-data" class="pb-5">
                @method('PATCH')
                @include('facebook.form')

                <div class="form-group pt-3">
                    <button type="submit" class="btn btn-primary">Opslaan</button>
                </div>

            </form>
        </div>
    </div>

@endsection

