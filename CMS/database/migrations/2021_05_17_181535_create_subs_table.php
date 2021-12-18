<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subs', function (Blueprint $table) {
            $table->id('id');
            $table->string('subTitle0');
            $table->longText('subDescription0');
            $table->string('subTitle1')->nullable();
            $table->longText('subDescription1')->nullable();
            $table->string('subTitle2')->nullable();
            $table->longText('subDescription2')->nullable();
            $table->string('subTitle3')->nullable();
            $table->longText('subDescription3')->nullable();
            $table->foreignId('clinic_id')->references('id')->on('clinics')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subs');
    }
}
