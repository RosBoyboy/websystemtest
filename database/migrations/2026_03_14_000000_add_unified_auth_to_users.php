<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('users', function (Blueprint $table) {
			if (!Schema::hasColumn('users', 'shop_name')) {
				$table->string('shop_name')->nullable()->after('status');
			}

			if (!Schema::hasColumn('users', 'shop_description')) {
				$table->text('shop_description')->nullable()->after('shop_name');
			}
		});

		// Keep compatibility with existing logic that assigns role = "both".
		DB::statement("ALTER TABLE `users` MODIFY COLUMN `role` ENUM('admin', 'seller', 'customer', 'both') NOT NULL DEFAULT 'customer'");
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('users', function (Blueprint $table) {
			if (Schema::hasColumn('users', 'shop_description')) {
				$table->dropColumn('shop_description');
			}

			if (Schema::hasColumn('users', 'shop_name')) {
				$table->dropColumn('shop_name');
			}
		});

		DB::statement("ALTER TABLE `users` MODIFY COLUMN `role` ENUM('admin', 'seller', 'customer') NOT NULL DEFAULT 'customer'");
	}
};
