;(function(window){
    window.resume = {};
    window.resume.page_home = function(){
        $("#btn_submit_info").click(function(){
            var ele_name = $("#username");
            var name = ele_name.val().trim();
            if(!(name.replace(" ","").length>3)){
                ele_name.parent().addClass("has-error");
                $("#username_help").removeClass("sr-only");
                ele_name.focus();
                return false;
            }else{
                ele_name.parent().removeClass("has-error");
                $("#username_help").addClass("sr-only");
            }
            var ele_phone = $("#user_phone");
            var reg_phone = /^[1-9][0-9]{10}$/g;
            var phone = ele_phone.val();
            if(!reg_phone.test(phone)){
                ele_phone.parent().addClass("has-error");
                $("#user_phone_help").removeClass("sr-only");
                ele_phone.focus();
                return false;

            }else{
                ele_phone.parent().removeClass("has-error");
                $("#user_phone_help").addClass("sr-only");
            }
            var ele_province = $("#user_province");
            var ele_city = $("#user_city");
            var ele_district = $("#user_district");
            var province = ele_province.val();
            var city = ele_city.val();
            var district = ele_district.val();
            var street_info = $("#street_info").val().trim();
            var area_help = $("#user_area_help");
            if(!province){
                area_help.parent().addClass("has-error");
                area_help.removeClass("sr-only")
                ele_province.focus();
                return false;
            }
            if(!city){
                area_help.parent().addClass("has-error");
                area_help.removeClass("sr-only");
                ele_city.focus();
                return false;
            }
            if(!district){
                area_help.parent().addClass("has-error");
                area_help.removeClass("sr-only");
                ele_district.focus();
                return false;
            }
            if(!street_info){
                area_help.parent().addClass("has-error");
                area_help.removeClass("sr-only");
                $("#street_info").focus();
                return false;
            }else{
                area_help.parent().removeClass("has-error");
                area_help.addClass("sr-only")
            }

            var ele_number = $("#user_number");
            var number = ele_number.val();
            if(!number){
                ele_number.parent().addClass("has-error");
                $("#user_number_help").removeClass("sr-only");
                ele_number.focus();
                return false;
            }else{
                ele_number.parent().removeClass("has-error");
                $("#user_number_help").addClass("sr-only");
            }
            var work_age = $("input[type='radio'][name='work_age']:checked").val();
            if(!work_age){
                $("#work_age_help").parent().addClass("has-error");
                $("#work_age_help").removeClass("sr-only");
                $("input[type='radio'][name='work_age']").eq(0).focus();
                return false;
            }else{
                $("#work_age_help").parent().removeClass("has-error");
                $("#work_age_help").addClass("sr-only");
            }
            var skills = get_user_skills();
            if(skills <= 0){
                $("#user_skills_help").parent().addClass("has-error");
                $("#user_skills_help").removeClass("sr-only");
                $("input[type=checkbox][name=early_education]").focus();
                return false;
            }else{
                $("#user_skills_help").parent().removeClass("has-error");
                $("#user_skills_help").addClass("sr-only"); 
            }
            var ele_exprience = $("#work_experience");
            var work_exprience = ele_exprience.val();
            if(!work_exprience){
                $("#work_experience_help").parent().addClass("has-error");
                $("#work_experience_help").removeClass("sr-only");
                ele_exprience.focus();
                return false;
            }else{
                $("#work_experience_help").parent().removeClass("has-error");
                $("#work_experience_help").addClass("sr-only");
            }
            var ele_upload_file = $("#upload_file");
            var upload_file = ele_upload_file.val();
            if(!upload_file){
                $("#upload_file_help").parent().addClass("has-error");
                $("#upload_file_help").removeClass("sr-only");
                ele_upload_file.focus();
                return false;
            }else{
                $("#upload_file_help").removeClass("sr_only");
            }
            var file_size =  ele_upload_file[0].files[0].size;
            var max_file_size = 10 * 1024 * 1024;
            if(file_size > max_file_size){
                $("#upload_file_help").parent().addClass("has-error");
                $("#max_file_help").removeClass("sr-only");
                ele_upload_file.focus();
                return false;
            }else{
                $("#max_file_help").parent().removeClass("has-error");
                $("#max_file_help").addClass("sr-only");
            }
            return true;
        })
        $("#user_province").change(function(){
            var ele_province = $(this);
            var province = ele_province.val();
            var ele_city = $("#user_city");
            var ele_childs = ele_city.children("option[value!='']");
            ele_childs.remove();
            var childs = find_area_childs(window.areaInfo,province);
            for(var o in childs){
                ele_city.append("<option value='"+childs[o].name+"'>"+childs[o].name+"</option>")
            }
            ele_city.val("");
            $("#user_district").val();
        });
        $("#user_city").change(function(){
            var ele_city = $(this);
            var city = ele_city.val();
            var ele_district = $("#user_district");
            var ele_childs = ele_district.children("option[value!='']");
            ele_childs.remove(); 
            var province = $("#user_province").val();
            var cities = find_area_childs(window.areaInfo,province);
            var districts = find_area_childs(cities,city);
            for(var o in districts){
                ele_district.append("<option value='"+districts[o].name+"'>"+districts[o].name+"</option>")
            }
            ele_district.val("");
        })
        
        fill_province_info();

    }

    function find_area_childs(area_set,name){
        var childs = null;
        if(!area_set) return childs;
        for(var o in area_set){
            if(area_set[o].name === name){
                childs = area_set[o].sub;
                break; 
            }
        }
        return childs;
    }

    function fill_province_info(){
        var area_info = window.areaInfo;
        var ele_province = $("#user_province");
        for(var o in area_info){
            ele_province.append("<option value='"+area_info[o].name+"'>"+area_info[o].name+"</option>")
        }
    }

    function get_user_skills(){
        var skills = ["early_education","prolactin","body_recovery","pediatric_massage","postpartum_sweating","baby_exception","ovary_care","uterus_old","psychological_counseling","baby_care","month_meal"];
        var val = null, count = 0;
        for(var o in skills){
            val = $("input[type='checkbox'][name='"+skills[o]+"']").prop("checked");
            if(val){
                count ++;
            }
        }
        return count;
    }

    window.resume.page_login() = function(){
        $("#btn_form_submit").click(function(){
            var username = $("#username").val();
            var password = $("password").val();
            
            return false;
        })
    }
})(window);