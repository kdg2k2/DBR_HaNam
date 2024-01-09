<?php

namespace App\Console;

use App\Http\Controllers\WeatherController;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $weather = new WeatherController();
        $schedule->call(function () use($weather) {
            $weather->getIndex();
            $weather->updateDBR();
            $weather->sendEmail();
            $weather->getHotspot();
        });

        // $schedule->call(function () use($weather) {
        //     $weather->getIndex();
        //     $weather->updateDBR();
        //     $weather->sendEmail();
        // })->dailyAt('13:15');

        // $schedule->call(function () use($weather){
        //     $weather->getHotspot();
        // })->everyTenMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
