<?php

namespace SettlementsSite;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

use SettlementsSite\AgreementsHolder;

class AgreementSite extends DataObject {
    
    private static $db = [
        'Title' => 'Varchar',
        'Address' => 'Text',
        'Status' => 'Text',
        'CulturalSig' => 'HTMLText'
    ];
    
    private static $has_one = [
        'AgreementsHolder' => AgreementsHolder::class
    ];
    
    public function getCMSFields() {
        
        $fields = FieldList::create(
            TextField::create('Title'),
            TextareaField::create('Address'),
            TextareaField::create('Status'),
            HtmlEditorField::create('CulturalSig')
        );
        
        return $fields;
    }
    
    public function canView($member = null, $context = []) {
        
        return true;
		
    }
    
}