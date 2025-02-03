import ReactGA from "react-ga4";

// console.log(window.ENV)
ReactGA.initialize(window.ENV.GA_ID); // eslint-disable-line

type pageDetail = {
  page: string;
  title: string;
}

const onPageView = async (pageDetail: pageDetail) => {
    ReactGA.send({ hitType: "pageview", page: pageDetail.page, title: pageDetail.title });
}

export { onPageView };