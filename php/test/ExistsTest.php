<?php
declare(strict_types=1);

// Benzokolonka SDK exists test

require_once __DIR__ . '/../benzokolonka_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BenzokolonkaSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
