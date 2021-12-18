@extends('layouts.app')

@section('title', 'Plattegrond bekijken')

@section('content')

    <div class="pb-1"></div>

    <div class="row">
        <div class="col-12 pb-5">
            <h1>Details over: {{ $map->title }}</h1>
            <a class="btn btn-primary mt-2" href="/wegwijzer/{{ $map->id }}/edit">Bewerken</a>

            <form action="/wegwijzer/{{ $map->id }}" method="POST">
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
            <p><strong>Naam: </strong> {{ $map->title }}</p>
            <p><strong>Verdieping: </strong> {{ $map->floor }}</p>
            <p class="pt-3"><strong>Foto: </strong></p>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <img src="{{ asset('storage/' . $map->image) }}" alt="" class="img-thumbnail">
        </div>
    </div>

@endsection
