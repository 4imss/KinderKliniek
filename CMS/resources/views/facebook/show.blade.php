@extends('layouts.app')

@section('title', 'Smoelenboek')

@section('content')

    <div class="pb-1"></div>

    <div class="row">
        <div class="col-12 pb-5">
            <h1>Details over: {{ $facebook->title }}</h1>
            <a class="btn btn-primary mt-2" href="/smoelenboek/{{ $facebook->id }}/edit">Bewerken</a>

            <form action="/smoelenboek/{{ $facebook->id }}" method="POST">
            @method('DELETE')
            @csrf

            <!-- Button trigger modal -->
                <button type="button" class="btn btn-danger mt-4" data-toggle="modal" data-target="#exampleModal">
                    Verwijder
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Weet u zeker dat u dit wilt verwijderen...?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuleren</button>
                                <button class="btn btn-danger" type="submit" >Verwijder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <p><strong>Naam: </strong> {{ $facebook->name }}</p>
            <p><strong>Functie: </strong> {{ $facebook->task }}</p>
            <p><strong>Werkzaam sinds: </strong> {{ $facebook->date }}</p>
            <p><strong>Werkzaam bij: </strong> {{ $facebook->clinic->title }}</p>
            <p><strong>Informatie alinea 1: </strong> {{ $facebook->information }}</p>
            <p><strong>Informatie alinea 2: </strong> {{ $facebook->information2 }}</p>
            <p><strong>Email: </strong> {{ $facebook->email }}</p>
            <p class="pt-3"><strong>Foto: </strong></p>
            <img src="{{ asset('storage/' . $facebook->image) }}" alt="" class="img-thumbnail">
        </div>
    </div>

@endsection
