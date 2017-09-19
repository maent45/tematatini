<?php

use Page;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

use SettlementsSite\AgreementSite;

class AgreementsHolder extends Page {
    
    private static $db = [
        'GMapsApiKey' => 'Text',
        'CenterLat' => 'Varchar',
        'CenterLong' => 'Varchar'
    ];
    
    private static $has_many = [
        'AgreementSites' => AgreementSite::class
    ];
    
    public function getCMSFields() {
        
        $fields = parent::getCMSFields();
        
        $fields->addFieldsToTab('Root.AgreementSite', array(
            TextField::create('GMapsApiKey', 'API Key'),
            HeaderField::create('Header','Default map center starting position'),
            TextField::create('CenterLat', 'Latitude'),
            TextField::create('CenterLong', 'Longitude'),
            GridField::create(
                'AgreementSites',
                'Agreement Sites',
                $this->AgreementSites(),
                GridFieldConfig_RecordEditor::create()
            )
        ));
        
        return $fields;
        
    }
    
}