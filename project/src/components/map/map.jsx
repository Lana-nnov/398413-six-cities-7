import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';

let CITY = [52.38333, 4.9];
const ZOOM = 12;
const ICON = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const mapRef = useRef(null);
  const { offers, city } = props;
  const currentOffers = offers.filter((elem) => elem.city === city);

  if (currentOffers.length > 0) {
    CITY = [currentOffers[0].location.latitude, currentOffers[0].location.longitude];
  }

  useEffect(() => {

    const map = leaflet.map(mapRef.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(CITY, ZOOM);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
      .addTo(map);

    offers.map((elem) => leaflet
      .marker([elem.location.latitude, elem.location.longitude], { icon: ICON })
      .addTo(map));

    return () => {
      map.remove();
    };

  }, [offers]);

  return (
    <div ref={mapRef} style={{ height: '100%' }}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

export default Map;
