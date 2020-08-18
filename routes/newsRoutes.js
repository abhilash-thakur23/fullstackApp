module.exports = (app) => {

  app.get(`/api/getLatestNews`, async (req, res) => {
    let response = await axios.get(process.env.GET_TOP_NEWS_URL + '?country=us&category=business&apiKey='+process.env.NEWS_API_TOKEN);
    console.log('getting res: ',JSON.stringify(response))
    return res.status(200).send(response);
  });

  app.post(`/api/getFilteredNews`, async (req, res) => {
    let queryFilters = formatQueryParams(req.body);
    let response = await axios.get(process.env.GET_EVERYTHING_URL + queryFilters + '&apiKey='+ process.env.NEWS_API_TOKEN);
    return res.status(200).send(response);
  })

}
let formatQueryParams = (queryFilters) => {
  console.log('InformatQueryParams: ',queryFilters);
  let params = '';
  if (queryFilters) {
    queryFilters.q = queryFilters.q ? queryFilters.q : false;
    params = '?q=' + queryFilters.q;
    queryFilters.domains = queryFilters.domains ? queryFilters.domains : false;
    params = '?domains=' + queryFilters.domains;
    if (queryFilters.q && queryFilters.from && queryFilters.to) {
      params = '?q=' + queryFilters.q + '&from=' + queryFilters.from + '&to=' + queryFilters.to;
    }
    console.log(' After framing queryFilters ' + JSON.stringify(queryFilters));
    return params;
  } else {
    return false;
  }
}