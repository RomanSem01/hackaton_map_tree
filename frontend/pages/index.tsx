import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import * as Styled from '../styles/home.styled';
import { useQuery } from '@tanstack/react-query';

import { homeService } from '../service/home.service';
import { queryKeys } from '../constants/query-keys.constants';
import HomeForm from '../components/HomeForm';
import SidebarForm from '../components/SidebarForm';

const Home: NextPage = () => {
  const { data, refetch } = useQuery([`${queryKeys.getAllTrees}`], () =>
    homeService.getTrees(),
  );

  const googlemap = useRef(null);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_KEY) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        version: 'weekly',
      });
      loader.load().then(() => {
        const google = window.google;
        var latLng = new google.maps.LatLng(49.2331, 28.4682);
        if (googlemap.current != null) {
          const map = new google.maps.Map(googlemap.current, {
            center: { lat: 49.2331, lng: 28.4682 },
            zoom: 16,
          });

          let marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: latLng,
          });

          let circle;
          data?.map((el) => {
            circle = new google.maps.Circle({
              strokeColor: el.color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: el.color,
              fillOpacity: 0.35,
              map,
              center: { lat: el.latitude, lng: el.longitude },
              radius: el.radius,
            });

            google.maps.event.addListener(
              circle,
              'click',
              (function (marker) {
                return function () {
                  const infowindow = new google.maps.InfoWindow({
                    content: `<p>${el.id}</p>`,
                  });

                  infowindow.setContent(`<p>Age: ${el.age}</p>
                  <p>Radius: ${el.radius}</p><p>Condition: ${
                    el.condition.charAt(0).toUpperCase() +
                    el.condition.replace('_', ' ').substring(1)
                  }</p><p>Family: ${el.family}</p>`);
                  infowindow.setPosition({
                    lat: el.latitude,
                    lng: el.longitude,
                  });
                  infowindow.open(map);
                };
              })(marker),
            );
          });

          map.addListener('click', (mapsMouseEvent) => {
            if (marker && marker.setMap) {
              marker.setMap(null);
            }

            localStorage.setItem(
              'LOCATION',
              JSON.stringify(mapsMouseEvent.latLng.toJSON()),
            );

            marker = new google.maps.Marker({
              position: mapsMouseEvent.latLng.toJSON(),
              map: map,
            });
          });
        }
      });
    }
  });

  return (
    <Styled.HomeWrapper>
      <>
        <Styled.MapsWrapper ref={googlemap} />
        <HomeForm refetch={refetch} />
        {data && <SidebarForm data={data} refetch={refetch} />}
      </>
    </Styled.HomeWrapper>
  );
};

export default Home;
