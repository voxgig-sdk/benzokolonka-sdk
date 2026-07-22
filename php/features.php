<?php
declare(strict_types=1);

// Benzokolonka SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BenzokolonkaFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BenzokolonkaBaseFeature();
            case "test":
                return new BenzokolonkaTestFeature();
            default:
                return new BenzokolonkaBaseFeature();
        }
    }
}
