(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(32)},32:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(1),i=t.n(r),c=t(4),s=t(5),l=t(7),u=t(6),p=t(8),d=t(9),g={position:"absolute",width:"100%",height:"100%",padding:"0",margin:"0"},h=function(e){function n(e){var t;Object(c.a)(this,n);var o=(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).props.initialCenter,a=o.lat,r=o.lng;return t.state={currentLocation:{lat:a,lng:r}},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,n){e.google!==this.props.google&&this.loadMap(),n.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"recenterMap",value:function(){var e=this.map,n=this.state.currentLocation,t=this.props.google.maps;if(e){var o=new t.LatLng(n.lat,n.lng);e.panTo(o)}}},{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(n){var t=n.coords;e.setState({currentLocation:{lat:t.latitude,lng:t.longitude}})}),this.loadMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,n=this.refs.map,t=i.a.findDOMNode(n),o=this.props.zoom,a=this.state.currentLocation,r=a.lat,c=a.lng,s=new e.LatLng(r,c),l=Object.assign({},{center:s,zoom:o});this.map=new e.Map(t,l)}}},{key:"renderChildren",value:function(){var e=this,n=this.props.children;if(n)return a.a.Children.map(n,function(n){if(n)return a.a.cloneElement(n,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},g);return a.a.createElement("div",null,a.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),n}(a.a.Component);h.defaultProps={zoom:14,initialCenter:{lat:-1.2884,lng:36.8233},centerAroundCurrentLocation:!1,visible:!0};var f=function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},t.onMarkerClick=function(e,n,o){return t.setState({selectedPlace:e,activeMarker:n,showingInfoWindow:!0})},t.onClose=function(e){t.state.showingInfoWindow&&t.setState({showingInfoWindow:!1,activeMarker:null})},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(h,{centerAroundCurrentLocation:!0,google:this.props.google},a.a.createElement(d.Marker,{onClick:this.onMarkerClick,name:"current location"}),a.a.createElement(d.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},a.a.createElement("div",null,a.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),n}(o.Component),v=Object(d.GoogleApiWrapper)({apiKey:"AIzaSyD_3mdPoryUtQengHHL__bbgtjvNUDAplE"})(f),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactmaps",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/reactmaps","/service-worker.js");w?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):m(n,e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.b0a86c68.chunk.js.map