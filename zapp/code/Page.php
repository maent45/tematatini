<?php

use SilverStripe\CMS\Model\SiteTree;
use Page;

class Page extends SiteTree
{
    private static $db = array(
    );

    private static $has_one = array(
    );
    
    public function test() {
        return AgreementsHolder::get()->GMapsApiKey;
    }
    
}