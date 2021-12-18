<div class="form-group">
    <label for="name">*Naam:</label>
    <input type="text" name="name" value="{{ old('name') ?? $facebook->name }}" class="form-control">
    <div>{{ $errors->first('name') }}</div>
</div>

<div class="form-group">
    <label for="task">*Functie:</label>
    <input type="text" name="task" value="{{ old('task') ?? $facebook->task }}" class="form-control">
    <div>{{ $errors->first('task') }}</div>
</div>

<div class="form-group">
    <label for="date">*Werkzaam sinds: <span class="text-secondary">(Bijvoorbeeld: Maart 2020)</span></label>
    <input type="text" name="date" value="{{ old('date') ?? $facebook->date }}" class="form-control">
    <div>{{ $errors->first('date') }}</div>
</div>

<div class="form-group">
    <label for="clinic_id">*Werkzaam bij:</label>
    <select name="clinic_id" id="clinic_id" class="form-control">
        <option value="" disabled selected>-Selecteer poli-</option>
        @foreach( $clinics as $clinic )
            <option value="{{ $clinic->id }}">{{ $clinic->title }}</option>
        @endforeach

    </select>
    <div>{{ $errors->first('clinic_id') }}</div>
</div>

<div class="form-group">
    <label for="information">*Informatie alinea:</label>

    <div class="form-floating">
        <textarea type="text" rows="10" cols="30" name="information" class="form-control" id="floatingTextarea">{{ old('information') ?? $facebook->information }}</textarea>
    </div>

    <div>{{ $errors->first('information') }}</div>

</div>

<div class="form-group">
    <label for="information2">*Informatie alinea 2:</label>

    <div class="form-floating">
        <textarea type="text" rows="10" cols="30" name="information2" class="form-control" id="floatingTextarea">{{ old('information2') ?? $facebook->information2 }}</textarea>
    </div>

    <div>{{ $errors->first('information2') }}</div>

</div>

<div class="form-group">
    <label for="email">*Email:</label>
    <input type="text" name="email" value="{{ old('email') ?? $facebook->email }}" class="form-control">
    <div>{{ $errors->first('email') }}</div>
</div>


<div class="form-group d-flex flex-column">
    <label for="image">Foto: <span class="text-secondary">(Max 5MB)</span></label>
    <input type="file" name="image" class="py-2">
</div>

@csrf
