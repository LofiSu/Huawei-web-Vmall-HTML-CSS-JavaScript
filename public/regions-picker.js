var Regions = (function() {
	var Result = function(inputEl) {
		this._region = { province: '', city: '', area: '', street: '' };
		// 页面当前显示的省市区街道数组
		this._province = null;
		this._city = null;
		this._area = null;
		this._provinces = regions.map(item => item.name);
		this._cities = null;
		this._areas = null;
		this._streets = null;
		// 相关的dom元素
		this.$inputEl = $(inputEl);
		this.$hookEl = null;
		this.$pickerTitleEl = null;
		this.$pickerContentProvinceEl = null;
		this.$pickerContentCityEl = null;
		this.$pickerContentAreaEl = null;
		this.$pickerContentStreetEl = null;
		// 初始化整个region-picker
		this.initHtml();		// 内容初始化
		this.initEvent();		// 
	};
	Result.prototype.initHtml = function() {
		this.$inputEl.wrap('<div class="region-picker-wrapper"></div>');
		this.$hookEl = this.$inputEl.parent();
		$(`
			<div class='region-picker'>
				<ul class='region-picker-title clearfix'>
					<li class='province active'>请选择(省)</li>
					<li class='city'>请选择(市)</li>
					<li class='area'>请选择(区/县)</li>
					<li class='street'>请选择(镇/乡/街道)</li>
				</ul>
				<div class='region-picker-content'>
					<ul class='province active clearfix'></ul>
					<ul class='city clearfix'></ul>
					<ul class='area clearfix'></ul>
					<ul class='street clearfix'></ul>
				</div>
				<span class='reset'>重置</span>
				<span class='close'>关闭</span>
			</div>
		`).appendTo(this.$hookEl);
		this.$regionPickerEl = this.$hookEl.find('.region-picker');
		this.$resetEl = this.$hookEl.find('span.reset');
		this.$closeEl = this.$hookEl.find('span.close');
		this.$pickerTitleEl = this.$hookEl.find('.region-picker-title');
		this.$pickerContentProvinceEl = this.$hookEl.find('.region-picker-content>ul.province');
		this.$pickerContentCityEl = this.$hookEl.find('.region-picker-content>ul.city');
		this.$pickerContentAreaEl = this.$hookEl.find('.region-picker-content>ul.area');
		this.$pickerContentStreetEl = this.$hookEl.find('.region-picker-content>ul.street');
		// 省显示
		this._provinces.forEach(item => {
			$(`<li><span>${ item }</span></li>`).appendTo(this.$pickerContentProvinceEl);
		});
	};
	Result.prototype.initEvent = function() {
		var that = this;
		// 重置 
		this.$resetEl.on('click', () => { this._reset(); });
		// 关闭
		this.$closeEl.on('click', () => { this._close();});
		// 显示
		this.$inputEl.on('focus', () => {
			this.$regionPickerEl.css('display', 'block');
		});
		// title切换事件
		this.$pickerTitleEl.find('li.province').on('click', function() {
			if($(this).hasClass('active')) return;
			$(this).addClass('active').siblings().removeClass('active');
			
			that.$pickerContentProvinceEl.addClass('active').siblings().removeClass('active');
		});
		this.$pickerTitleEl.find('li.city').on('click', function() {
			if($(this).hasClass('active')) return;
			if(!that._region.province) return;
			$(this).addClass('active').siblings().removeClass('active');
			that.$pickerContentCityEl.addClass('active').siblings().removeClass('active');
		});
		this.$pickerTitleEl.find('li.area').on('click', function() {
			if($(this).hasClass('active')) return;
			if(!that._region.city) return;
			$(this).addClass('active').siblings().removeClass('active');
			that.$pickerContentAreaEl.addClass('active').siblings().removeClass('active');
		});
		this.$pickerTitleEl.find('li.street').on('click', function() {
			if($(this).hasClass('active')) return;
			if(!that._region.area) return;
			$(this).addClass('active').siblings().removeClass('active');
			that.$pickerContentStreetEl.addClass('active').siblings().removeClass('active');
		});
		// content被点了
		// 省被点事件处理
		this.$pickerContentProvinceEl.on('click', e => {
			if(e.target.tagName !== 'SPAN') return;
			if($(e.target).parent().hasClass('active')) return;
			// 样式切换
			$(e.target).parent().addClass('active').siblings().removeClass('active');
			// 内部数据维护
			var province = $(e.target).text();
			this._region.province = province;
			this._province = regions.find(item => item.name === province);
			this._updateCity();
			this.$pickerTitleEl.find('li.city').trigger('click');
		});
		// 市被点事件处理
		this.$pickerContentCityEl.on('click', e => {
			if(e.target.tagName !== 'SPAN') return;
			if($(e.target).parent().hasClass('active')) return;
			// 样式切换
			$(e.target).parent().addClass('active').siblings().removeClass('active');
			// 内部数据维护
			var city = $(e.target).text();
			this._region.city = city;
			this._city = this._province.childs.find(item => item.name === city);
			this._updateArea();
			this.$pickerTitleEl.find('li.area').trigger('click');
		});
		// 区被点事件处理
		this.$pickerContentAreaEl.on('click', e => {
			if(e.target.tagName !== 'SPAN') return;
			if($(e.target).parent().hasClass('active')) return;
			// 样式切换
			$(e.target).parent().addClass('active').siblings().removeClass('active');
			// 内部数据维护
			var area = $(e.target).text();
			this._region.area = area;
			this._area = this._city.childs.find(item => item.name === area);
			this._updateStreet();
			this.$pickerTitleEl.find('li.street').trigger('click');
		});
		// 街道被点击事件处理
		this.$pickerContentStreetEl.on('click', e => {
			if(e.target.tagName !== 'SPAN') return;
			if($(e.target).parent().hasClass('active')) return;
			// 样式切换
			$(e.target).parent().addClass('active').siblings().removeClass('active');
			// 内部数据维护
			var street = $(e.target).text();
			this._region.street = street;
			this._updateRegionText();
		});
	
	
	};
	Result.prototype._reset = function() {			// 重置
		this._region.province = '';
		this._province = null;
		this._updateCity();
		this.$pickerContentProvinceEl.find('li').removeClass('active');
		this.$pickerTitleEl.find('li.province').trigger('click');
	};
	Result.prototype._close = function() {
		this.$regionPickerEl.css('display', 'none');
		// 所有数据回归原始状态
		this._region = { province: '', city: '', area: '', street: '' };
		this._province = null;
		this._city = null;
		this._area = null;
		this._cities = null;
		this._areas = null;
		this._streets = null;
		// 所有dom回归原始状态
		this.$pickerContentProvinceEl.find('li').removeClass('active');
		this.$pickerTitleEl.find('li.province').trigger('click');
		this.$pickerContentCityEl.empty();
		this.$pickerContentAreaEl.empty();
		this.$pickerContentStreetEl.empty();
	};
	Result.prototype._updateCity = function() {
		this.$pickerContentCityEl.empty();
		this._region.city = '';
		this._city = null;
		if(!this._region.province) { this._cities = null; } 
		else {
			this._cities = this._province.childs.map(item => item.name);
			this._cities.forEach(item => {
				$(`<li><span>${ item }</span></li>`).appendTo(this.$pickerContentCityEl);
			});
		}
		this._updateArea();
	};
	Result.prototype._updateArea = function() {
		this.$pickerContentAreaEl.empty();
		this._region.area = '';
		this._area = null;
		if(!this._region.city) { this._areas = null; }
		else {
			this._areas = this._city.childs.map(item => item.name);
			this._areas.forEach(item => {
				$(`<li><span>${ item }</span></li>`).appendTo(this.$pickerContentAreaEl);
			});
		}
		this._updateStreet();
	};
	Result.prototype._updateStreet = function() {
		this.$pickerContentStreetEl.empty();
		this._region.street = '';
		if(!this._region.area) { this._streets = null; }
		else {
			this._streets = this._area.childs.map(item => item.name);
			this._streets.forEach(item => {
				$(`<li><span>${ item }</span></li>`).appendTo(this.$pickerContentStreetEl);
			});
		}
		this._updateRegionText();
	};
	Result.prototype._updateRegionText = function() {
		// 更新文本框
		this.$inputEl.val('');
		var text = '';
		if(this._region.province) text += this._region.province;
		if(this._region.city) text += ' ' + this._region.city;
		if(this._region.area) text+= ' ' + this._region.area;
		if(this._region.street) text += ' ' + this._region.street;
		this.$inputEl.val(text);
	};
	return Result;
})();


// part1: 省市区街道四级联动公用函数
// function showProvince() {					// 动态显示省份
// 	var provinces = Regions.getProvinces();
// 	optionEl = document.createElement('option');
// 	optionEl.innerText = '- 请选择 -';
// 	optionEl.value = '';
// 	provinceEl.appendChild(optionEl);
// 	for(var i = 0; i < provinces.length; i++) {
// 		optionEl = document.createElement('option');
// 		optionEl.innerText = provinces[i];
// 		optionEl.value = provinces[i];
// 		provinceEl.appendChild(optionEl);
// 	}
// }
// function showCity(province) {				// 省变化，动态更新市
// 	cityEl.innerHTML = '';// 清空原有的市对应的option
// 	optionEl = document.createElement('option');
// 	optionEl.innerText = '- 请选择 -'
// 	optionEl.value = '';
// 	cityEl.appendChild(optionEl);
// 	if(region.province === '') return;	// 如果没有选一个具体的省，没有市显示，只有请选择
// 	var cities = Regions.getCities(region.province);	
// 	for(var i = 0; i < cities.length; i++) {
// 		optionEl = document.createElement('option');
// 		optionEl.innerText = cities[i];
// 		optionEl.value = cities[i];
// 		cityEl.appendChild(optionEl);
// 	}
// }
// function showArea() {
// 	areaEl.innerHTML = '';// 清空原有的市对应的option
// 	optionEl = document.createElement('option');
// 	optionEl.innerText = '- 请选择 -'
// 	optionEl.value = '';
// 	areaEl.appendChild(optionEl);
// 	if(region.province === '' || region.city === '') return;	// 如果没有选一个具体的省，没有市显示，只有请选择
// 	var areas = Regions.getAreas(region.province, region.city);	
// 	for(var i = 0; i < areas.length; i++) {
// 		optionEl = document.createElement('option');
// 		optionEl.innerText = areas[i];
// 		optionEl.value = areas[i];
// 		areaEl.appendChild(optionEl);
// 	}
// }
// function showStreet() {
// 	streetEl.innerHTML = '';// 清空原有的市对应的option
// 	optionEl = document.createElement('option');
// 	optionEl.innerText = '- 请选择 -'
// 	optionEl.value = '';
// 	streetEl.appendChild(optionEl);
// 	if(region.province === '' || region.city === '' || region.area === '') return;	// 如果没有选一个具体的省，没有市显示，只有请选择
// 	var streets = Regions.getStreets(region.province, region.city, region.area);	
// 	for(var i = 0; i < streets.length; i++) {
// 		optionEl = document.createElement('option');
// 		optionEl.innerText = streets[i];
// 		optionEl.value = streets[i];
// 		streetEl.appendChild(optionEl);
// 	}
// }
// // part2: 省市区街道四级联动辅助变量声明
// var provinceEl = document.querySelector('select.province'),
// 	cityEl = document.querySelector('select.city'),
// 	areaEl = document.querySelector('select.area'),
// 	streetEl = document.querySelector('select.street'),
// 	optionEl = null,
// 	region = { province: '', city: '', area: '', street: '' };
// // part3: 省市区街道四级联动, 联动事件绑定
// provinceEl.onchange = function() {
// 	region.province = this.value;
// 	region.city = '';
// 	region.area = '';
// 	region.street = '';
// 	showCity();
// 	showArea();
// 	showStreet();
// };
// cityEl.onchange = function() {
// 	region.city = this.value;
// 	region.area = '';
// 	region.street = '';
// 	showArea();
// 	showStreet();
// };
// areaEl.onchange = function() {
// 	region.area = this.value;
// 	region.street = '';
// 	showStreet();
// };
// streetEl.onchange = function() {
// 	region.street = this.value;
// };
// // part4: 省市区街道四级联动，导火索(推倒多米诺骨牌第一张)
// showProvince();
// 
// 
// 
// 
// 
// 
// 