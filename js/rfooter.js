/**
 * Created by admin on 2016/8/1.
 */
var Foot= React.createClass({
    render: function() {
        return <div className="container">
            <ul className="version pull-left">
            <li>contactus@vanecloud.com</li>
            <li>Tel:+86.21.6151 3468</li>
        </ul>
        <ul className="version pull-right">
            <li>中科氢氧云计算技术（上海）有限公司</li>
            <li>www.vanecloud.com</li>
        </ul>
        </div>;
    }
});

ReactDOM.render(<Foot/>,document.getElementsByClassName('footer')[0]);