<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Clinic extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'title',
        'description',
        'care',
    ];

    // scope where care == Medische zorg and put it in MedicalCare
    public function scopeMedicalCare($query)
    {
        return $query->where('care', 'Medische zorg');
    }
    // scope where care == Paramedische zorg and put it in ParamedicCare
    public function scopeParamedicCare($query)
    {
        return $query->where('care', 'Paramedische zorg');
    }
    // scope where care == Niet medische zorg and put it in NonMedicalCare
    public function scopeNonMedicalCare($query)
    {
        return $query->where('care', 'Niet medische zorg');
    }
    // scope where care == De Kinder GGZ and put it in ChildMentalCare
    public function scopeChildMentalCare($query)
    {
        return $query->where('care', 'De Kinder GGZ');
    }

    // relation to other database
    public function subs()
    {
        return $this->hasMany(Sub::class, 'clinic_id');
    }

    public function facebook()
    {
        return $this->hasMany(Facebook::class, 'clinic_id');
    }


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];
}
