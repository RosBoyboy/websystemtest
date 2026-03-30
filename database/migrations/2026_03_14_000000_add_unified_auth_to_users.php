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

		$this->setRoleConstraint(true);
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

		$this->setRoleConstraint(false);
	}

	/**
	 * Update users.role allowed values across supported database drivers.
	 *
	 * @param bool $allowBoth
	 * @return void
	 */
	private function setRoleConstraint(bool $allowBoth): void
	{
		$driver = Schema::getConnection()->getDriverName();

		if ($driver === 'mysql') {
			if ($allowBoth) {
				DB::statement("ALTER TABLE `users` MODIFY COLUMN `role` ENUM('admin', 'seller', 'customer', 'both') NOT NULL DEFAULT 'customer'");
			} else {
				DB::statement("ALTER TABLE `users` MODIFY COLUMN `role` ENUM('admin', 'seller', 'customer') NOT NULL DEFAULT 'customer'");
			}

			return;
		}

		if ($driver === 'pgsql') {
			DB::statement('ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check');

			if ($allowBoth) {
				DB::statement("ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('admin', 'seller', 'customer', 'both'))");
			} else {
				DB::statement("ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('admin', 'seller', 'customer'))");
			}
		}
	}
};
