/**
 * 
 */
package org.jack.sdr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author jackho
 *
 */
@Controller
@RequestMapping("/")
public class SiteController {
	@RequestMapping(method = RequestMethod.GET)
	public String start(){
		return "redirect:/views/page/CRUD.html";
	}
}
