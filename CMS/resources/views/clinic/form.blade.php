<div class="form-group">
    <label for="title">*Naam:</label>
    <input type="text" name="title" value="{{ old('title') ?? $clinic->title }}" class="form-control">
    <div>{{ $errors->first('title') }}</div>
</div>

<div class="form-group">
    <label for="description">*Beschrijving:</label>

    <div class="form-floating">
        <textarea type="text" rows="10" cols="30" name="description" class="form-control" id="floatingTextarea">{{ old('description') ?? $clinic->description }}</textarea>
    </div>
    <div>{{ $errors->first('description') }}</div>

</div>

<div class="form-group">
    <label for="care">*Zorg categorieën:</label>
    <select name="care" id="care" class="form-control">
        <option value="" disabled selected>-Selecteer categorie-</option>
        <option value="Medische zorg" {{ $clinic->care == 'Medische zorg' ? 'selected' : ''}}>Medische zorg</option>
        <option value="Paramedische zorg" {{ $clinic->care == 'Paramedische zorg' ? 'selected' : ''}}>Paramedische zorg</option>
        <option value="Niet medische zorg" {{ $clinic->care == 'Niet medische zorg' ? 'selected' : ''}}>Niet medische zorg</option>
        <option value="De Kinder GGZ" {{ $clinic->care == 'De Kinder GGZ' ? 'selected' : ''}}>De Kinder GGZ</option>
    </select>
    <div>{{ $errors->first('care') }}</div>
</div>

@csrf
