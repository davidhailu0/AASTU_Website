export default function ResultPage(){
    return (<>
    <div className="overlay" onclick="exitImages(this)">
        <div id="contact_info"></div>
    </div>
    <section className="result_page">
        {/* <?php if(isset($_GET['search_btn'])||isset($_GET['q'])||isset($_GET['p'])){displayResult();} ?> */}
    </section> 
    <section className="pagination">
        {/* <?php if(isset($_GET['search_btn'])||isset($_GET['q'])||isset($_GET['p'])){displayPagination();} ?> */}
    </section>
    </>);
}
