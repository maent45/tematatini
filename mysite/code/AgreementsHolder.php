<?php

namespace SettlementsSite;

use Page;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

use SettlementsSite\AgreementSite;

class AgreementsHolder extends Page {
    
    private static $db = [
        'GMapsApiKey' => 'Text' // AIzaSyA6HgT0DHPqWkjv7MUh47YgE8n59Hlp_jM
    ];
    
    private static $has_many = [
        'AgreementSites' => AgreementSite::class
    ];
    
    public function getCMSFields() {
        
        $fields = parent::getCMSFields();
        
        $fields->addFieldToTab('Root.AgreementSites', TextField::create('GMapsApiKey', 'API Key'));
        $fields->addFieldToTab('Root.AgreementSites', GridField::create(
            'AgreementSites',
            'AgreementSites',
            $this->AgreementSites(),
            GridFieldConfig_RecordEditor::create()
        ));
        
        return $fields;
        
    }
    
}