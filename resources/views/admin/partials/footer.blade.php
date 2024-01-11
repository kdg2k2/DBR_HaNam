<script data-cfasync="false" src="{{ asset('/adminTemplate/js/email-decode.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/jquery-ui.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/bootstrap.min.js') }}"></script>

<script src="{{ asset('/adminTemplate/js/waves.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('/adminTemplate/js/jquery.slimscroll.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/modernizr.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/css-scrollbars.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/jszip.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/pdfmake.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/vfs_fonts.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/buttons.print.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/buttons.html5.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/responsive.bootstrap4.min.js') }}"></script>

<script src="{{ asset('/adminTemplate/js/pcoded.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/vertical-layout.min.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/jquery.mCustomScrollbar.concat.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/adminTemplate/js/script.js') }}"></script>

<script src="{{ asset('/adminTemplate/js/jquery.flot.js') }}"></script>
<script src="{{
        asset('/adminTemplate/js/jquery.flot.categories.js')
    }}"></script>
<script src="{{ asset('/adminTemplate/js/curvedLines.js') }}"></script>
<script src="{{
        asset('/adminTemplate/js/jquery.flot.tooltip.min.js')
    }}"></script>

<script src="{{ asset('/adminTemplate/js/chartist.js') }}"></script>

<script src="{{ asset('/adminTemplate/js/amcharts.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/serial.js') }}"></script>
<script src="{{ asset('/adminTemplate/js/light.js') }}"></script>

<script type="text/javascript" src="{{ asset('/adminTemplate/js/script.min.js') }}"></script>

<script src="{{ asset('/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('/ckfinder/ckfinder.js') }}"></script>
<script>
    $(document).ready(function() {
        var the_a = $('.nav-list li a');
        the_a.each(function() {
            $(this).on('click', function(){
                $(this).addClass('active');
            })
            if ($(this).attr('href') == window.location.pathname) {
                $(this).parent().addClass('active');
                if ($(this).parent().parent().parent().hasClass('pcoded-hasmenu')){
                    $(this).parent().parent().parent().addClass('pcoded-trigger active');
                    $(this).find(">:first-child").css('color', '#42a5f5');
                }
            }
        });
    });
</script>

<script>
    $(".data-table").DataTable({
        scrollCollapse: true,
        autoWidth: false,
        responsive: true,
        paging: true,
        columnDefs: [
            {
                targets: "datatable-nosort",
                orderable: false,
            },
        ],
        lengthMenu: [
            [10, 50, 100, 500, -1],
            [10, 50, 100, 500, "All"],
        ],
        language: {
            info: "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
            lengthMenu: "Hiển thị _MENU_ mục",
            search: 'Tìm kiếm',
            searchPlaceholder: "",
            paginate: {
                next: ">",
                previous: "<",
            },
        },
        order:[],
    });
</script>