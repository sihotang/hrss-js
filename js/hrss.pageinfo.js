/**
 * [PageInfo description]
 */
var PageInfo = function () {
	/**
	 * [user description]
	 * @type {Object}
	 */
	var user = {
		empno: { label: 'NO REG', value: '' },
		empname: { label: 'EMPLOYEE', value: '' },
		grade: { label: 'LEVEL', value: '' },
		workgroup: { label: 'WORKUNIT', value: '' }
	};
	/**
	 * [period description]
	 * @type {Object}
	 */
	var period = {
		period: { label: 'Period', value: '' },
		year: { label: 'Year', value: '' }
	};
	/**
	 * [handleInitUser description]
	 * @return {[type]} [description]
	 */
	var handleInitUser = function () {
		$('[data-init-user]').each(function() {
			var dataInit = $(this).attr('data-init-user');

			if (dataInit == 'empno') {
				user.empno.value = $(this).val();
			} else if (dataInit == 'empname') {
				user.empname.value = $(this).val();
			} else if (dataInit == 'grade') {
				user.grade.value = $(this).val();
			} else if (dataInit == 'workgroup') {
				user.workgroup.value = $(this).val();
			} else {
				return;
			}
		});
	};
	/**
	 * [handleInitPeriod description]
	 * @return {[type]} [description]
	 */
	var handleInitPeriod = function () {
		$('[data-init-period]').each(function() {
			var dataInit = $(this).attr('data-init-user');

			if (dataInit == 'period') {
				period.period.value = $(this).val();
			} else if (dataInit == 'year') {
				period.year.value = $(this).val();
			} else {
				return;
			}
		});
	};
	/**
	 * 
	 */
	return {
		/**
		 * [init description]
		 * @return {[type]} [description]
		 */
		init: function () {
			handleInitUser();
			handleInitPeriod();
		},
		/**
		 * [user description]
		 * @type {[type]}
		 */
		user: user,
		/**
		 * [period description]
		 * @type {[type]}
		 */
		period: period
	};

}();
/**
 * [description]
 * @param  {[type]} ) {              PageInfo.init(); } [description]
 * @return {[type]}   [description]
 */
jQuery(document).ready(function() {
   PageInfo.init(); 
});