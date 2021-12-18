@extends('layouts.app')

@section('content')

    <div class="pb-1"></div>

    <div class="row">
        <div class="col-12 pb-5">
            <h1>Details over: {{ $sub->subTitle }}</h1>
            <a class="btn btn-primary mt-2" href="/sub/{{ $sub->id }}/edit">Bewerken</a>

            <form action="/sub/{{ $sub->id }}" method="POST">
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
            <p><strong>Naam: </strong> {{ $sub->subTitle0 }}</p>
            <p><strong>Beschrijving: </strong> {{ $sub->subDescription0}}</p>
            <p><strong>Naam 2: </strong> {{ $sub->subTitle1 }}</p>
            <p><strong>Beschrijving 2: </strong> {{ $sub->subDescription1}}</p>
            <p><strong>Naam 3: </strong> {{ $sub->subTitle2 }}</p>
            <p><strong>Beschrijving 3: </strong> {{ $sub->subDescription2}}</p>
            <p><strong>Naam 4: </strong> {{ $sub->subTitle3 }}</p>
            <p><strong>Beschrijving 4: </strong> {{ $sub->subDescription3}}</p>
            <p><strong>Poli: </strong><a href="/poli/{{ $sub->clinic->id }}"><span> ({{ $sub->clinic->title }})</span></a></p>
        </div>
    </div>

@endsection
