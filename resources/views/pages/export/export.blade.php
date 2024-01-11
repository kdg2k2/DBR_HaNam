<!DOCTYPE html>
<html lang="en">

<head>
  @include('pages.partials.head')
  <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
  <style>
    .elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap {
      display: flex;
      justify-content: center;
    }
  </style>
</head>

<body id="the7-body"
  class="page-template-default page page-id-2 wp-custom-logo wp-embed-responsive theme-dt-the7 woocommerce-no-js dt-responsive-on right-mobile-menu-close-icon ouside-menu-close-icon mobile-close-right-caption  fade-thin-mobile-menu-close-icon fade-medium-menu-close-icon srcset-enabled btn-flat custom-btn-color custom-btn-hover-color first-switch-logo-left first-switch-menu-right second-switch-logo-left second-switch-menu-right right-mobile-menu layzr-loading-on popup-message-style the7-ver-11.10.1 elementor-default elementor-template-full-width elementor-clear-template elementor-kit-9 elementor-page elementor-page-2 elementor-page-2440">
  @include('pages.partials.loading')
  <div id="page">
    @include('pages.partials.header')
    <div id="main" class="sidebar-none sidebar-divider-off">
      <div class="main-gradient"></div>
      <div class="wf-wrap">
        <div class="wf-container-main">
          <div id="content" class="content" role="main">
            <div data-elementor-type="single-page" data-elementor-id="2440"
              class="elementor elementor-2440 elementor-location-single post-2 page type-page status-publish has-post-thumbnail hentry"
              data-elementor-post-type="elementor_library">
              <div class="elementor-section-wrap">
                <section
                  class="elementor-section elementor-top-section elementor-element elementor-element-2842c69 elementor-section-height-min-height elementor-section-items-stretch elementor-section-boxed elementor-section-height-default p-0"
                  data-id="2842c69" data-element_type="section"
                  style="background: url('/winery/wp-content/uploads/sites/80/2021/05/w-bg215.jpg'); background-position: center;">
                  <div class="elementor-background-overlay"></div>
                  <div class="elementor-container elementor-column-gap-wide" style="min-height: 25vh !important">
                    <div class="elementor-row">
                      <div
                        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1b2eabda"
                        data-id="1b2eabda" data-element_type="column">
                        <div class="elementor-column-wrap elementor-element-populated">
                          <div class="elementor-widget-wrap">
                            <div
                              class="elementor-element elementor-element-5e8bf21f elementor-widget elementor-widget-heading"
                              data-id="5e8bf21f" data-element_type="widget" data-widget_type="heading.default">
                              <div class="elementor-widget-container">
                                <h1 class="elementor-heading-title elementor-size-default">Xuất dữ liệu</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  class="elementor-section elementor-top-section elementor-element elementor-element-1bd3bc8 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                  data-id="1bd3bc8" data-element_type="section">
                  <div class="p-4">
                    <div class="row">
                      <div class="col-lg-3 col-md-12 col-sm-12" style="display: grid; align-content: center;">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="typeData">Loại dữ liệu</label>
                              <select class="form-control" id="typeData" onchange="loadView()">
                                <option value="1">Thời tiết</option>
                                <option value="2">Điểm cháy</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label for="timeStart">Thời gian bắt đầu</label>
                              <input type="date" class="form-control" id="timeStart" onchange="loadView()">
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label for="timeEnd">Thời gian kết thúc</label>
                              <input type="date" class="form-control" id="timeEnd" onchange="loadView()">
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <input type="button" class="btn btn-info form-control" value="Xuất biểu" id="export">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-9 col-md-12 col-sm-12" style="height:60vh; background-color: #3333330f; overflow: auto;">
                        <div id="error_show"
                          style="height: 100%; display: grid; justify-content: center; align-content: center;" hidden>
                          <h2 style="color: rgba(255, 0, 0, 0.689)">Không tìm thấy dữ liệu xem trước</h2>
                        </div>
                        <iframe id="frame" style="border: 0; padding: 0; margin: 0; height:60vh; width:100%" src=''
                          frameborder='0'></iframe>
                      </div>
                    </div>
                  </div>
                  {{-- <div class="elementor-container elementor-column-gap-no">
                    <div class="elementor-row">
                      <div
                        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4aa126f2"
                        data-id="4aa126f2" data-element_type="column">
                        <div class="elementor-column-wrap elementor-element-populated">
                          <div class="elementor-widget-wrap">
                            <div
                              class="elementor-element elementor-element-6cb1c2ca elementor-widget elementor-widget-theme-post-content"
                              data-id="6cb1c2ca" data-element_type="widget"
                              data-widget_type="theme-post-content.default">
                              <div class="elementor-widget-container">
                                <div data-elementor-type="wp-page" data-elementor-id="2" class="elementor elementor-2"
                                  data-elementor-post-type="page">
                                  <div class="elementor-inner">
                                    <div class="elementor-section-wrap">
                                      <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-9725aef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="9725aef" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-wide">
                                          <div class="elementor-row">
                                            <div
                                              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3ec961b"
                                              data-id="3ec961b" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-c86f7ec elementor-widget elementor-widget-text-editor"
                                                    data-id="c86f7ec" data-element_type="widget"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-text-editor elementor-clearfix"> We are at
                                                        your service and look forward to your email, call or visit!
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-a054bf1 elementor-widget elementor-widget-spacer"
                                                    data-id="a054bf1" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-4f60837 elementor-widget elementor-widget-heading"
                                                    data-id="4f60837" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">tel.
                                                        800-123-456 (7890)</h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-df8e059 elementor-widget elementor-widget-spacer"
                                                    data-id="df8e059" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-2d5b86b elementor-widget elementor-widget-heading"
                                                    data-id="2d5b86b" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">1234
                                                        Rose Road, Napa Valley, USA, RR 01245</h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-b261e98 elementor-widget elementor-widget-spacer"
                                                    data-id="b261e98" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-26f33d3 elementor-align-center elementor-widget elementor-widget-the7_button_widget"
                                                    data-id="26f33d3" data-element_type="widget"
                                                    data-widget_type="the7_button_widget.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-button-wrapper">
                                                        <a href="https://www.google.com/maps/place/Napa+Valley,+%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@38.4297365,-122.5609133,11z/data=!3m1!4b1!4m5!3m4!1s0x808454f53baeb1ad:0x863a3784a09da6e3!8m2!3d38.4274315!4d-122.3943299"
                                                          class="box-button elementor-button elementor-size-md">Get
                                                          directions <i aria-hidden="true"
                                                            class="elementor-button-icon fas fa-map-pin"></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-00b64f9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="00b64f9" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-wide">
                                          <div class="elementor-row">
                                            <div
                                              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d1bcaae"
                                              data-id="d1bcaae" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-b924486 elementor-widget elementor-widget-heading"
                                                    data-id="b924486" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h3 class="elementor-heading-title elementor-size-default">
                                                        Questions?</h3>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-10ad98d elementor-widget elementor-widget-spacer"
                                                    data-id="10ad98d" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-0563fff elementor-button-align-stretch elementor-widget elementor-widget-form"
                                                    data-id="0563fff" data-element_type="widget"
                                                    data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                                                    data-widget_type="form.default">
                                                    <div class="elementor-widget-container">
                                                      <form class="elementor-form" method="post" name="New Form">
                                                        <input type="hidden" name="post_id" value="2" />
                                                        <input type="hidden" name="form_id" value="0563fff" />
                                                        <input type="hidden" name="referer_title" value="Contact" />
                                                        <input type="hidden" name="queried_id" value="2" />
                                                        <div
                                                          class="elementor-form-fields-wrapper elementor-labels-above">
                                                          <div
                                                            class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
                                                            <label for="form-field-name" class="elementor-field-label">
                                                              Name </label>
                                                            <input size="1" type="text" name="form_fields[name]"
                                                              id="form-field-name"
                                                              class="elementor-field elementor-size-md  elementor-field-textual"
                                                              required="required" aria-required="true">
                                                          </div>
                                                          <div
                                                            class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required elementor-mark-required">
                                                            <label for="form-field-email" class="elementor-field-label">
                                                              Email </label>
                                                            <input size="1" type="email" name="form_fields[email]"
                                                              id="form-field-email"
                                                              class="elementor-field elementor-size-md  elementor-field-textual"
                                                              required="required" aria-required="true">
                                                          </div>
                                                          <div
                                                            class="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                                            <label for="form-field-message"
                                                              class="elementor-field-label"> Message </label>
                                                            <textarea
                                                              class="elementor-field-textual elementor-field  elementor-size-md"
                                                              name="form_fields[message]" id="form-field-message"
                                                              rows="6"></textarea>
                                                          </div>
                                                          <div
                                                            class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                            <button type="submit"
                                                              class="elementor-button elementor-size-md">
                                                              <span>
                                                                <span class="elementor-button-icon"></span>
                                                                <span class="elementor-button-text">Send message</span>
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-5a1dc08 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="5a1dc08" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-wide">
                                          <div class="elementor-row">
                                            <div
                                              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f6a7abd"
                                              data-id="f6a7abd" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-32b63a7 elementor-widget elementor-widget-heading"
                                                    data-id="32b63a7" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">Tasting
                                                        Reservations </h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-2c23528 elementor-widget elementor-widget-spacer"
                                                    data-id="2c23528" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-fdff099 elementor-widget elementor-widget-text-editor"
                                                    data-id="fdff099" data-element_type="widget"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-text-editor elementor-clearfix">
                                                        <p>tel. 800-123-456 (7890) <br />reservations@the7.io </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-466af1d"
                                              data-id="466af1d" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-d002e9d elementor-widget elementor-widget-heading"
                                                    data-id="d002e9d" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">Wine
                                                        Club</h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-9e0ae0d elementor-widget elementor-widget-spacer"
                                                    data-id="9e0ae0d" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-5a18e72 elementor-widget elementor-widget-text-editor"
                                                    data-id="5a18e72" data-element_type="widget"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-text-editor elementor-clearfix">
                                                        <p>tel. 800-123-456 (7891) <br />wineclub@the7.io </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-490315f"
                                              data-id="490315f" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-97bd1dc elementor-widget elementor-widget-heading"
                                                    data-id="97bd1dc" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">Tours &
                                                        Events</h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-5fab0a6 elementor-widget elementor-widget-spacer"
                                                    data-id="5fab0a6" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-783008b elementor-widget elementor-widget-text-editor"
                                                    data-id="783008b" data-element_type="widget"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-text-editor elementor-clearfix">
                                                        <p>tel. 800-123-456 (7892) <br />events@the7.io </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-34307e6"
                                              data-id="34307e6" data-element_type="column">
                                              <div class="elementor-column-wrap elementor-element-populated">
                                                <div class="elementor-widget-wrap">
                                                  <div
                                                    class="elementor-element elementor-element-1e94d18 elementor-widget elementor-widget-heading"
                                                    data-id="1e94d18" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                      <h5 class="elementor-heading-title elementor-size-default">
                                                        Restaurant</h5>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-040dfe5 elementor-widget elementor-widget-spacer"
                                                    data-id="040dfe5" data-element_type="widget"
                                                    data-widget_type="spacer.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="elementor-element elementor-element-f72805d elementor-widget elementor-widget-text-editor"
                                                    data-id="f72805d" data-element_type="widget"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                      <div class="elementor-text-editor elementor-clearfix">
                                                        <p>tel. 800-123-456 (7893) <br />Mon.-Fri. 10am &#8211; 11pm
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> --}}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  @include('pages.partials.footer')

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>
  <script>
    function loadView() {
      var typeData = $('#typeData').val();
      var timeStart = $('#timeStart').val();
      var timeEnd = $('#timeEnd').val();
      if (timeEnd >= timeStart) {
        if (typeData == 1) {
          $.ajax({
            type: 'GET',
            url: '/ajax/exportWeather',
            data: { timeStart: timeStart, timeEnd: timeEnd },
            success: function (data) {
              if (data == '0') {
                $('#error_show').attr('hidden', false);
              } else {
                url_download = data;
                // $('#frame').attr('src', "https://docs.google.com/viewer?url=http://127.0.0.1:8000/" + data + "&embedded=true");
                Hienthi(url_download);
                $('#error_show').attr('hidden', true);
              }
            }
          });
        } else {
          $.ajax({
            type: 'GET',
            url: '/ajax/exportFirePoint',
            data: { timeStart: timeStart, timeEnd: timeEnd },
            success: function (data) {
              if (data == '0') {
                $('#error_show').attr('hidden', false);
              } else {
                url_download = data;
                // $('#frame').attr('src', "https://docs.google.com/viewer?url=http://127.0.0.1:8000/" + data + "&embedded=true");
                Hienthi(url_download);
                $('#error_show').attr('hidden', true);
              }
            }
          });
        }
      }
    }

    function Hienthi(url) {
      fetch(url).then(function (res) {
        return res.arrayBuffer();
      }).then(function (ab) {
        var data = new Uint8Array(ab);
        var workbook = XLSX.read(data, { type: "array" });

        // Lấy ra sheet đầu tiên
        var firstSheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[firstSheetName];

        // Chuyển sheet thành HTML
        var html = XLSX.utils.sheet_to_html(sheet);
        
        document.getElementById("frame").srcdoc = '<style>table{border-collapse:collapse;width:100%;border:1px solid #ddd;}td,th{border:1px solid #ddd;padding:8px;text-align:left;}tr:first-child { font-weight: bold; }</style>' + html;
      });
    }

    $('#export').click(function (e) {
      var timeStart = $('#timeStart').val();
      var timeEnd = $('#timeEnd').val();
      if (timeEnd >= timeStart) {
        e.preventDefault();
        window.location.href = url_download;
      }
    })
  </script>
</body>

</html>