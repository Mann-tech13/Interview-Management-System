package com.project.ims.service;

import java.util.List;

import com.project.ims.vo.BlockVO;

public interface BlockService {

	List<BlockVO> getBlocked();

	BlockVO getBlockedbyID(int blockId);

	BlockVO addBlocked(BlockVO blockVO);

	BlockVO updateBlocked(BlockVO blockVO);

	BlockVO deleteBlock(int blockId);

}
