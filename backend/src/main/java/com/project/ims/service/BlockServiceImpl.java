package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.ims.entity.Block;
import com.project.ims.repository.BlockRepo;
import com.project.ims.vo.BlockVO;

public class BlockServiceImpl implements BlockService{

	@Autowired
	private BlockRepo blockRepo;
	@Override
	public List<BlockVO> getBlocked() {
		List<Block> blockedList = blockRepo.findAll();
		List<BlockVO> blockedVOlist = new ArrayList<BlockVO>();
		for(int i=0; i<blockedList.size(); i++) {
			Block block = blockedList.get(i);
			BlockVO blockVO = new BlockVO(block.getBlockId(), block.getFirstName(), block.getLastName(), block.getEmail(), block.getContactNo(), block.getPan(), block.getDate());
			blockedVOlist.add(blockVO);
		}
		return blockedVOlist;
	}

	@Override
	public BlockVO getBlockedbyID(int blockId) {
		Optional<Block> block = blockRepo.findById(blockId);
		BlockVO blockVO = null;
		if(block.isPresent()) {
			Block blockedPresent = block.get();
			blockVO = new BlockVO(blockedPresent.getBlockId(), blockedPresent.getFirstName(), blockedPresent.getLastName(), blockedPresent.getEmail(), blockedPresent.getContactNo(), blockedPresent.getPan(), blockedPresent.getDate());
		}
		return blockVO;
	}

	@Override
	public BlockVO addBlocked(BlockVO blockVO) {
		Block block = new Block(blockVO.getBlockId(), blockVO.getFirstName(), blockVO.getLastName(), blockVO.getEmail(), blockVO.getContactNo(), blockVO.getPan(), blockVO.getDate());
		blockRepo.save(block);
		return blockVO;
	}

	@Override
	public BlockVO updateBlocked(BlockVO blockVO) {
		Block block = new Block(blockVO.getBlockId(), blockVO.getFirstName(), blockVO.getLastName(), blockVO.getEmail(), blockVO.getContactNo(), blockVO.getPan(), blockVO.getDate());
		blockRepo.save(block);
		return blockVO;
	}

	@Override
	public BlockVO deleteBlock(int blockId) {
		blockRepo.deleteById(blockId);
		return null;
	}

}
