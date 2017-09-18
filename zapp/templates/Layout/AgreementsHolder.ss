<h1>$test</h1>

<div class="content-container unit size3of4 lastUnit">
	<article>
		<h1>$Title</h1>
		<div class="content">$Content</div>
	</article>
		$Form
		$CommentsForm
		<div id="map" style="width:100%;height:400px"></div>
</div>

<% if $AgreementSites %>
    <div class="map-locations" style="display: none;">
        <% loop $AgreementSites %>
            <div class="map-locations-child">
                <span class="title">$Title</span>
                <span class="lat">$Lat</span>
                <span class="long">$Long</span>
                <span class="address">$Address</span>
                <span class="status">$Status</span>
                <div class="cultural-sig">$CulturalSig</div>
            </div>
        <% end_loop %>    
    </div>
<% end_if %>