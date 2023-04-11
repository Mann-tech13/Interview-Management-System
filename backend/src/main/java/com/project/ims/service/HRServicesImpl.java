package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ims.repository.HRRepo;
import com.project.ims.entity.HR;
import com.project.ims.vo.HRVO;

@Service
public class HRServicesImpl implements HRServices {

	@Autowired
	private HRRepo hrdao;

	@Override
	public List<HRVO> getHR() {
		List<HR> HRList = hrdao.findAll();
		List<HRVO> HRVOList = new ArrayList<HRVO>();

		for (int i = 0; i < HRList.size(); i++) {
			HR a = HRList.get(i);
			HRVO hrvo = new HRVO(a.getHrID(), a.getFirstName(), a.getLastName(), a.getDesignation(), a.getRole(),
					a.getEmail(), a.getContactNo(), a.isFlag());
			HRVOList.add(hrvo);
		}
		return HRVOList;
	}

	@Override
	public HRVO getHRbyID(int hrID) {
		Optional<HR> HRbyID = hrdao.findById(hrID);
		HRVO HRVObyID = null;
		HR h = null;
		if (HRbyID.isPresent()) {
			h = HRbyID.get();
			HRVObyID = new HRVO(h.getHrID(), h.getFirstName(), h.getLastName(), h.getDesignation(), h.getRole(),
					h.getEmail(), h.getContactNo(), h.isFlag());
		}
		return HRVObyID;
	}

	@Override
	public HRVO addHR(HRVO hrvo) {
		HR hr = new HR(hrvo.getHrID(), hrvo.getFirstName(), hrvo.getLastName(), hrvo.getDesignation(), hrvo.getRole(),
				hrvo.getEmail(), hrvo.getContactNo(), hrvo.isFlag());
		hrdao.save(hr);
		return hrvo;
	}
	
	@Override
	public HRVO updateHR(HRVO hrvo) {
		HR a = new HR(hrvo.getHrID(), hrvo.getFirstName(), hrvo.getLastName(), hrvo.getDesignation(), hrvo.getRole(),
				hrvo.getEmail(), hrvo.getContactNo(), hrvo.isFlag());
		hrdao.save(a);
		return hrvo;
	}
	
	@Override
	public void deleteHR(int hrID) {
		hrdao.deleteById(hrID);
	}
}
