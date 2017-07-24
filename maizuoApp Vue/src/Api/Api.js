
const host = 'http://m.maizuo.com/v4';

//banner数据
const banner = '/api/billboard/home?__t=1498802923278';

//https://api.growingio.com/v2/929dfc63e100d573/web/pv?stm=1498803672358
//https://api.growingio.com/v2/929dfc63e100d573/web/action?stm=1498803673934
/******************************电影******************************/
//正在热映//
const hotShow = '/api/film/now-playing';

//点击热映电影详情接口
// api/film/3714?__t=1499062191315
const details = "api/film/";

//即将上映//
const soonShow = '/api/film/coming-soon';

/******************************影院******************************/
//  ?__t=1498804476471
const cinema = '/api/cinema';

/******************************演出******************************/

//?__t=1498804648084

const show = 'api/schedule';

/******************************商城******************************/
//商城首页//
const shopMall = '/ad/list';
// http://aura.maizuo.com/api/ad/list
//商城-好货精选//

// ?page=1
// &num=20
//http://aura.maizuo.com/api/recommend/home?page=2&num=20
const mallGoods = '/recommend/home';

// 演出详情大图片
// http://ticket.maizuo.com/api/ schedule/31/description?__t=1499094017360
const showdetailsimg = "schedule/";

// 商城详情
//  http://aura.maizuo.com/api/category/items?id=8&page=1&num=20

// http://aura.maizuo.com/api/active?id=15&page=1&pageSize=20

 // http://aura.maizuo.com/api/category/items?id=8&page=1&num=20
const shoppingdetails = "/category/items"

// 商品标题
// http://aura.maizuo.com/api/category?id=8
const shoppingdetailstitle = "/category"

// 详情列表中的单品详情
// http://aura.maizuo.com/api/item/desc?id=138
const shoppinglistdetails = "/item/desc"
// 定位请求数据
// http://m.maizuo.com/v4/api/city?__t=1499166655554
const shoppinglistdetailsname = "/item"
// http://aura.maizuo.com/api/active?id=22&page=1&pageSize=20
const position ="/api/city"

//  http://aura.maizuo.com/api/item?id=138

// 电影影院详情数据接口
// http://m.maizuo.com/v4/api/cinema/3280/film?__t=1499270253303
const filmslist = "/cinema"

// 商城手机壳专区数据请求借口
// http://m.maizuo.com/act/active/api/active-detail?cityId=10&id=1190
const qualityZone = "/active-detail"

// http://m.maizuo.com/v4/api/schedule?__t=1499392535188&film=0&cinema=2791
// http://m.maizuo.com/v4/api/schedule?__t=1499392535188&film=0&cinema=2791
const filmScreenings = "/v4/api/schedule"


export default {
		bannerApi:banner,
    hotShowApi: hotShow,
    soonShowApi: soonShow,
    cinemaApi: cinema,
    showApi: show,
    shopMallApi: shopMall,
    mallGoodsApi: mallGoods,
		detailsApi:details,
		showdetailsimgApi:showdetailsimg,
		shoppingdetailsApi:shoppingdetails,
		shoppingdetailstitleApi:shoppingdetailstitle,
		positionApi:position,
		shoppinglistdetailsApi:shoppinglistdetails,
		shoppinglistdetailsnameApi:shoppinglistdetailsname,
		filmslistApi:filmslist,
		qualityZoneApi:qualityZone,
		filmScreeningsApi:filmScreenings
}
