"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var listbox_1 = require("./listbox");
var animations_1 = require("@angular/platform-browser/animations");
describe('Listbox', function () {
    var listbox;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule
            ],
            declarations: [
                listbox_1.Listbox
            ]
        });
        fixture = testing_1.TestBed.createComponent(listbox_1.Listbox);
        listbox = fixture.componentInstance;
    });
    it('should created by default', function () {
        fixture.detectChanges();
        var listboxEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        expect(listboxEl).toBeTruthy();
    });
    it('should disabled', function () {
        listbox.checkbox = true;
        listbox.multiple = true;
        listbox.disabled = true;
        listbox.filter = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickSingleSpy = spyOn(listbox, 'onOptionClickCheckbox').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        bmwEl.click();
        fixture.detectChanges();
        var listboxEl = fixture.debugElement.query(platform_browser_1.By.css('div')).nativeElement;
        var filterInputEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-listbox-filter-container')).query(platform_browser_1.By.css('input')).nativeElement;
        var checkboxEl = fixture.debugElement.query(platform_browser_1.By.css('li')).query(platform_browser_1.By.css('input')).nativeElement;
        expect(listboxEl.className).toContain("ui-state-disabled");
        expect(filterInputEl.disabled).toEqual(true);
        expect(checkboxEl.disabled).toEqual(true);
        expect(clickSingleSpy).not.toHaveBeenCalled();
    });
    it('should call onOptionTouchEnd', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var onOptionTouchEndSpy = spyOn(listbox, 'onOptionTouchEnd').and.callThrough();
        bmwEl.dispatchEvent(new Event('touchend'));
        fixture.detectChanges();
        expect(onOptionTouchEndSpy).toHaveBeenCalled();
        expect(listbox.optionTouched).toEqual(true);
    });
    it('should call onOptionTouchEnd with readonly', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        listbox.readonly = true;
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var onOptionTouchEndSpy = spyOn(listbox, 'onOptionTouchEnd').and.callThrough();
        bmwEl.dispatchEvent(new Event('touchend'));
        fixture.detectChanges();
        expect(onOptionTouchEndSpy).toHaveBeenCalled();
        expect(listbox.optionTouched).toEqual(undefined);
    });
    it('should change style and styleClass', function () {
        listbox.style = { 'primeng': 'rocks!' };
        listbox.styleClass = "Primeng ROCKS!";
        fixture.detectChanges();
        var listboxEl = fixture.debugElement.query(platform_browser_1.By.css('div')).nativeElement;
        expect(listboxEl.className).toContain("Primeng ROCKS!");
        expect(listboxEl.style.primeng).toEqual("rocks!");
    });
    it('should select item when click', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickSingleSpy = spyOn(listbox, 'onOptionClickSingle').and.callThrough();
        var onOptionClick = spyOn(listbox, 'onOptionClick').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        bmwEl.click();
        fixture.detectChanges();
        expect(listbox.value).toEqual("BMW");
        expect(bmwEl.className).toContain("ui-state-highlight");
        expect(clickSingleSpy).toHaveBeenCalled();
        expect(onOptionClick).toHaveBeenCalled();
        expect(listbox.optionTouched).toEqual(false);
    });
    it('should select two item with multiple option', function () {
        listbox.multiple = true;
        listbox.metaKeySelection = false;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickMultipleSpy = spyOn(listbox, 'onOptionClickMultiple').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var audiEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[0].nativeElement;
        bmwEl.click();
        fixture.detectChanges();
        audiEl.click();
        fixture.detectChanges();
        expect(listbox.value[0]).toEqual("BMW");
        expect(listbox.value[1]).toEqual("Audi");
        expect(bmwEl.className).toContain("ui-state-highlight");
        expect(audiEl.className).toContain("ui-state-highlight");
        expect(clickMultipleSpy).toHaveBeenCalledTimes(2);
    });
    it('should drop two item when double click', function () {
        listbox.multiple = true;
        listbox.metaKeySelection = false;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickMultipleSpy = spyOn(listbox, 'onOptionClickMultiple').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var audiEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[0].nativeElement;
        bmwEl.click();
        audiEl.click();
        bmwEl.click();
        audiEl.click();
        fixture.detectChanges();
        expect(listbox.value[0]).not.toEqual("BMW");
        expect(listbox.value[1]).not.toEqual("Audi");
        expect(bmwEl.className).not.toContain("ui-state-highlight");
        expect(audiEl.className).not.toContain("ui-state-highlight");
        expect(clickMultipleSpy).toHaveBeenCalledTimes(4);
    });
    it('should select two item with multiple checkbox option', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickCheckboxSpy = spyOn(listbox, 'onOptionClickCheckbox').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var audiEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var bmwCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].query(platform_browser_1.By.css('input')).nativeElement;
        var audiCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[0].query(platform_browser_1.By.css('input')).nativeElement;
        bmwCheckBoxEl.click();
        audiCheckBoxEl.click();
        fixture.detectChanges();
        expect(listbox.value[0]).toEqual("BMW");
        expect(listbox.value[1]).toEqual("Audi");
        expect(bmwEl.className).toContain("ui-state-highlight");
        expect(audiEl.className).toContain("ui-state-highlight");
        expect(clickCheckboxSpy).toHaveBeenCalledTimes(2);
    });
    it('should drop two item when double click (checkbox)', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickCheckboxSpy = spyOn(listbox, 'onOptionClickCheckbox').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var audiEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var bmwCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].query(platform_browser_1.By.css('input')).nativeElement;
        var audiCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[0].query(platform_browser_1.By.css('input')).nativeElement;
        bmwCheckBoxEl.click();
        audiCheckBoxEl.click();
        bmwCheckBoxEl.click();
        audiCheckBoxEl.click();
        fixture.detectChanges();
        expect(listbox.value[0]).not.toEqual("BMW");
        expect(listbox.value[1]).not.toEqual("Audi");
        expect(bmwEl.className).not.toContain("ui-state-highlight");
        expect(audiEl.className).not.toContain("ui-state-highlight");
        expect(clickCheckboxSpy).toHaveBeenCalledTimes(4);
    });
    it('should select all', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var toggleAllSpy = spyOn(listbox, 'toggleAll').and.callThrough();
        fixture.detectChanges();
        var selectAllEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default')).nativeElement;
        selectAllEl.click();
        fixture.detectChanges();
        expect(listbox.value.length).toEqual(10);
        expect(listbox.allChecked).toEqual(true);
        expect(selectAllEl.className).toContain('ui-state-active');
        expect(toggleAllSpy).toHaveBeenCalled();
    });
    it('should show filtered items', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        listbox.filter = true;
        fixture.detectChanges();
        var filterInputEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-listbox-filter-container')).children[0].nativeElement;
        filterInputEl.value = "f";
        filterInputEl.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        for (var x = 0; x < 10; x++) {
            if (x == 2 || x == 3) {
                expect(fixture.debugElement.query(platform_browser_1.By.css('ul')).children[x].nativeElement.style.display).toEqual("block");
            }
            else {
                expect(fixture.debugElement.query(platform_browser_1.By.css('ul')).children[x].nativeElement.style.display).toEqual("none");
            }
        }
    });
    it('should listen onChange', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var data;
        listbox.onChange.subscribe(function (value) { return data = value; });
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        bmwEl.click();
        fixture.detectChanges();
        expect(data.value).toEqual("BMW");
    });
    it('should listen dbClick', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var data;
        listbox.onDblClick.subscribe(function (value) { return data = value; });
        var onOptionDoubleClickSpy = spyOn(listbox, "onOptionDoubleClick").and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1];
        bmwEl.nativeElement.click();
        bmwEl.triggerEventHandler("dblclick", new MouseEvent("dblclick"));
        fixture.detectChanges();
        expect(data.value[0]).toEqual("BMW");
        expect(onOptionDoubleClickSpy).toHaveBeenCalled();
        expect(data.value[0]).toEqual("BMW");
    });
    it('should listen dbClick with readonly', function () {
        listbox.readonly = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var data;
        listbox.onDblClick.subscribe(function (value) { return data = value; });
        var onOptionDoubleClickSpy = spyOn(listbox, "onOptionDoubleClick").and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1];
        bmwEl.triggerEventHandler("dblclick", new MouseEvent("dblclick"));
        fixture.detectChanges();
        expect(onOptionDoubleClickSpy).toHaveBeenCalled();
        expect(data).toBeUndefined();
    });
    it('should select item when click and drop item when ctrl click', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        listbox.metaKeySelection = true;
        var onOptionClick = spyOn(listbox, 'onOptionClick').and.callThrough();
        fixture.detectChanges();
        var data;
        listbox.onChange.subscribe(function (value) { return data = value; });
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var ctrlClickEvent = { 'ctrlKey': true };
        bmwEl.click();
        fixture.detectChanges();
        listbox.onOptionClick(ctrlClickEvent, listbox.options[1]);
        fixture.detectChanges();
        expect(listbox.value).toEqual(null);
        expect(bmwEl.className).not.toContain("ui-state-highlight");
        expect(onOptionClick).toHaveBeenCalled();
        expect(data.value).toEqual(null);
    });
    it('should select item when click and drop item when ctrl click', function () {
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        listbox.metaKeySelection = true;
        listbox.multiple = true;
        var onOptionClick = spyOn(listbox, 'onOptionClick').and.callThrough();
        fixture.detectChanges();
        var data;
        listbox.onChange.subscribe(function (value) { return data = value; });
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var ctrlClickEvent = { 'ctrlKey': true };
        bmwEl.click();
        fixture.detectChanges();
        listbox.onOptionClick(ctrlClickEvent, listbox.options[1]);
        fixture.detectChanges();
        expect(listbox.value).toEqual([]);
        expect(bmwEl.className).not.toContain("ui-state-highlight");
        expect(onOptionClick).toHaveBeenCalled();
        expect(data.value).toEqual([]);
    });
    it('should select two item and drop one', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var clickCheckboxSpy = spyOn(listbox, 'onOptionClickCheckbox').and.callThrough();
        fixture.detectChanges();
        var bmwEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var audiEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].nativeElement;
        var bmwCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[1].query(platform_browser_1.By.css('input')).nativeElement;
        var audiCheckBoxEl = fixture.debugElement.query(platform_browser_1.By.css('ul')).children[0].query(platform_browser_1.By.css('input')).nativeElement;
        bmwCheckBoxEl.click();
        audiCheckBoxEl.click();
        fixture.detectChanges();
        audiCheckBoxEl.click();
        fixture.detectChanges();
        expect(listbox.value[0]).toEqual("BMW");
        expect(listbox.value.length).toEqual(1);
        expect(listbox.value[1]).not.toEqual("Audi");
        expect(bmwEl.className).toContain("ui-state-highlight");
        expect(clickCheckboxSpy).toHaveBeenCalledTimes(3);
    });
    it('should unselect all', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var toggleAllSpy = spyOn(listbox, 'toggleAll').and.callThrough();
        fixture.detectChanges();
        var selectAllEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default')).nativeElement;
        selectAllEl.click();
        fixture.detectChanges();
        selectAllEl.click();
        fixture.detectChanges();
        expect(listbox.value.length).toEqual(0);
        expect(listbox.allChecked).toEqual(false);
        expect(selectAllEl.className).not.toContain('ui-state-active');
        expect(toggleAllSpy).toHaveBeenCalledTimes(2);
    });
    it('should toggleAll click with readonly true', function () {
        listbox.multiple = true;
        listbox.checkbox = true;
        listbox.readonly = true;
        listbox.options = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        var toggleAllSpy = spyOn(listbox, 'toggleAll').and.callThrough();
        fixture.detectChanges();
        var selectAllEl = fixture.debugElement.query(platform_browser_1.By.css('.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default')).nativeElement;
        selectAllEl.click();
        fixture.detectChanges();
        expect(listbox.value).toEqual(undefined);
        expect(listbox.allChecked).toEqual(undefined);
        expect(selectAllEl.className).not.toContain('ui-state-active');
        expect(toggleAllSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=listbox.spec.js.map