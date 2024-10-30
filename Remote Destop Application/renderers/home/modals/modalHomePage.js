import * as Imports from '../../../js/import.js';
const {connect, html } = Imports;

function createModalHomePage({Departments}) {
    return html `
         <!--modal join session-->
            <div id="modal_JoinSession" class="modal hidden">
                <div class="modal__overlay"></div>
                <div class="modal__body">
                    <div class="auth-form">
                        <div class="auth-form__header">
                            <h2 class="auth-form__title">Tham gia vào phòng ban</h2>
                            <div class="modal__btnExit">X</div>
                        </div>
                        <!--Nếu đã tham gia vào company nào hiện form này-->
                        <div class="auth-form__body">
                            <div class="auth-form__desc">
                                <p>
                                    Nhập mã phòng ban do bộ phận IT cung cấp để cấp cho họ quyền truy cập vào thiết bị của bạn và
                                    bắt
                                    đầu nhận hỗ trợ.
                                </p>
                            </div>
                            <div class="auth-form__form">
                                <div class="form-group">
                                    <input type="text" id='email' name='email' class='form-control' placeholder="Mã phòng ban">
                                    <lable class="form-label" for='email'>Mã phòng ban<span class="required">*</span></lable>
                                    <span class="form-message"></span>
                                </div>
                            </div>
                            <div class="auth-form__controls">
                                <button class="btn btn--primary btn--normal">Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/. End modal join session-->

             <!--modal exit session -->
                    ${
                        Departments.map((department,index)=>{
                            return html `
                                <div data-indexSession="${index}" class="modal hidden modalexitSession">
                                    <div class="modal__overlay"></div>
                                    <div class="modal__body">
                                        <div class="auth-form">
                                            <div class="auth-form__header">
                                                <h2 class="auth-form__title">${department.isJoined&&'Thoát Phòng ban'||'Hủy yêu cầu tham gia' }</h2>
                                                <div class="modal__btnExit">X</div>
                                            </div>
                                            <div class="auth-form__desc">
                                                <p>
                                                    Yêu cầu của bạn sẽ được xem xét và xét duyệt bởi Admin
                                                </p>
                                            </div>
                                            <div class="auth-form__form">

                                                <div class="modal-body__title--warning">${department.isJoined&&`Bạn chắc chắn muốn thoát phòng ${department.name} !`||`Bạn chắc chắn muốn hủy yêu cầu tham gia phòng ${department.name} !`}</div>

                                            </div>
                                            <div class="auth-form__controls">
                                                <button class="btn btn--modalbtnext  modal__btnExit">Cancel</button>
                                                <button class="btn btn--primary btn--normal">Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        })
                    }
             <!--/. endmodal exit session -->

         

    `
}
export default connect()(createModalHomePage) 