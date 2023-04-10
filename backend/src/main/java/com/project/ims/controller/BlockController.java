package com.project.ims.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.ims.service.BlockService;
import com.project.ims.vo.AdminVO;
import com.project.ims.vo.BlockVO;

@RestController
public class BlockController {

	@Autowired
	private BlockService blockService;

	@GetMapping("/blocked")
	public List<BlockVO> getBlocked() {
		return this.blockService.getBlocked();
	}

	@GetMapping("/blocked/{blockId}")
	public BlockVO getBlockedbyId(@PathVariable int blockId) {
		return this.blockService.getBlockedbyID(blockId);
	}

	// Add Block
	@PostMapping("/blocked")
	public BlockVO addBlock(@RequestBody BlockVO blockVO) {
		return this.blockService.addBlocked(blockVO);
	}

	// Update Block
	@PutMapping("/blocked")
	public BlockVO updateBlock(@RequestBody BlockVO blockVO) {
		return this.blockService.updateBlocked(blockVO);
	}

	// Delete Block
	@DeleteMapping("/blocked/{blockId}")
	public BlockVO deleteBlock(@PathVariable int blockId) {
		return this.blockService.deleteBlock(blockId);
	}
}
