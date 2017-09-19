<?php

namespace SettlementsSite;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Assets\Image;
use SilverStripe\Assets\File;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class AgreementSite extends DataObject {
    
    private static $db = [
        'Title' => 'Varchar',
        'Lat' => 'Decimal',
        'Long' => 'Decimal',
        'Address' => 'Text',
        'Status' => 'Text',
        'CulturalSig' => 'HTMLText',
        'VidURL' => 'Text'
    ];
    
    private static $has_one = [
        'AgreementsHolder' => 'AgreementsHolder'
    ];
    
    public function getCMSFields() {
        
        $fields = FieldList::create(
            HeaderField::create('Header','Map config'),
            TextField::create('Title'),
            TextField::create('VidURL', 'Video URL'),
            TextField::create('Lat'),
            TextField::create('Long'),
            HeaderField::create('Header','Content'),
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