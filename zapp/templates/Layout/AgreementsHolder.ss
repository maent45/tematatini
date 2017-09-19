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

<section style="display:none">
    <div class="map-def-center-coords">
        <span class="map-def-center-coords__lat">$CenterLat</span>
        <span class="map-def-center-coords__long">$CenterLong</span>
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
                    <span class="vid-url">$VidURL</span>
                </div>
            <% end_loop %>    
        </div>
    <% end_if %>
</section>