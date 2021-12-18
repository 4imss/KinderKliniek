@extends('layouts.app')

@section('content')

    <div class="row">
        <div class="col-12">
            <h1>Poli bewerken</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <form action="/sub/{{ $sub->id }}" method="POST" class="pb-5">
                @method('PATCH')
                @include('sub.form')

                <div class="form-group pt-3">
                    <button type="submit" class="btn btn-primary">Opslaan</button>
                </div>

            </form>
        </div>
    </div>
@endsection
