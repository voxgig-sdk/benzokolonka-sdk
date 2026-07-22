<?php
declare(strict_types=1);

// Benzokolonka SDK base feature

class BenzokolonkaBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BenzokolonkaContext $ctx, array $options): void {}
    public function PostConstruct(BenzokolonkaContext $ctx): void {}
    public function PostConstructEntity(BenzokolonkaContext $ctx): void {}
    public function SetData(BenzokolonkaContext $ctx): void {}
    public function GetData(BenzokolonkaContext $ctx): void {}
    public function GetMatch(BenzokolonkaContext $ctx): void {}
    public function SetMatch(BenzokolonkaContext $ctx): void {}
    public function PrePoint(BenzokolonkaContext $ctx): void {}
    public function PreSpec(BenzokolonkaContext $ctx): void {}
    public function PreRequest(BenzokolonkaContext $ctx): void {}
    public function PreResponse(BenzokolonkaContext $ctx): void {}
    public function PreResult(BenzokolonkaContext $ctx): void {}
    public function PreDone(BenzokolonkaContext $ctx): void {}
    public function PreUnexpected(BenzokolonkaContext $ctx): void {}
}
