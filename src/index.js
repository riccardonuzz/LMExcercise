import './styles/style.less';

import ParkingWidget from './ParkingWidget';
import Header from './Header';
import ParkingService from './services/ParkingService';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* Only used to show the cart icon */
library.add(fas, far, fab);
dom.i2svg();
dom.watch();

(function main() {
  const root = document.querySelector('#root');

    /* Fetching parking data */
    ParkingService.fetchData();
    
    /* Listening to dataFetched event */
    document.addEventListener('dataFetched', (data) => {
        const { vendor, parkings, dictionary } = data.detail;

        /* Simulating Web App Header with Cart */
        const header = new Header(ParkingService);
        const parkingWidget = new ParkingWidget(vendor, parkings, dictionary, ParkingService.addToCart);

        /* Appending header and Widget Component to DOM */
        root.appendChild(header.render());
        root.appendChild(parkingWidget.render());
    });
})();