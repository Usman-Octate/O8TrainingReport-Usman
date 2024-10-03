import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { HiMiniChevronUpDown } from 'react-icons/hi2';
import Select from 'react-select';
import { FaLayerGroup } from 'react-icons/fa';
import { RxPinLeft, RxPinRight, RxCaretSort } from 'react-icons/rx';
import { flexRender } from '@tanstack/react-table';
import { IoIosSearch } from 'react-icons/io';
import { VscGroupByRefType, VscUngroupByRefType } from "react-icons/vsc"; 
import { FaArrowsLeftRight } from "react-icons/fa6"; 


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuButton = styled.button`
  position: absolute;
  right: 4px;
  top: 10px;
  color: black;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const headerWidth = 150; // Set a fixed width for the headers

const StyledTh = styled.th`
  width: ${props => props.width || headerWidth}px;
  position: relative;
  background-color: ${props => (props.isPinned ? 'rgb(97 6 79)' : '#dfedfd')};
  border-radius: 0;
  ${props => props.isDragging && 'background: #fffbfb;'};
  color: #6f7ea3;

  &:hover .menu {
    visibility: visible;
  }

  cursor: ${props => (props.isPinned ? 'default' : 'grab')};

  ${props =>
    props.isDragging &&
    css`
      opacity: 0.8;
      filter: brightness(85%);
      border: 2px dashed #aaa;
    `}
`;

const MenuList = styled.div`
  position: absolute;
  right: 0;
  color: black;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${fadeIn} 0.1s ease-out;
  border-radius: 4px;
  margin-top: 20px;
  width: 200px;
`;

const MenuItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:hover {
    background: #e0f7ff;
  }

  &:last-child {
    border-bottom: none;
  }

  svg {
    margin-right: 8px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  text-align: center;
`;

const Text = styled.span`
  font-size: small;
  cursor: pointer; /* Add cursor pointer for clickable text */
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputIcon = styled(IoIosSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 8px 0;
  padding: 6px 6px 6px 30px; /* Adjust padding to account for the icon */
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const PlaceholderTh = styled.th`
  width: ${headerWidth}px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px dashed #aaa;
`;

const Resizer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 5px;
  height: 100%;
  cursor: col-resize;
  z-index: 1;
  touch-action: none;
`;

const StyledChevronIcon = styled(HiMiniChevronUpDown)`
  width: 24px; /* Example: Set icon width */
  height: 24px; /* Example: Set icon height */
  fill: ${props => (props.sortState === 'asc' 
    ? 'url(#ascGradient)' 
    : props.sortState === 'desc' 
      ? 'url(#descGradient)' 
      : 'transparent' // Initially hidden
  )};
`;

const TableHeader = ({ header, index, table, onColumnGroup, moveHeader }) => {
  const isPinned = header.column.getIsPinned();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortState, setSortState] = useState('none');
  const menuRef = useRef();

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortClick = () => {
    header.column.toggleSorting();
    setSortState(prevState => {
      if (prevState === 'none') return 'asc';
      if (prevState === 'asc') return 'desc';
      if (prevState === 'desc') return 'none';
      return 'none';
    });
  };

  // React DnD Dragging logic
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'header',
    item: { index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'header',
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveHeader(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // Stop propagation of mouse events from resizer to drag handler
  const stopPropagation = event => {
    event.stopPropagation();
  };

  return (
    <StyledTh
      ref={node => drag(drop(node))}
      key={header.id}
      colSpan={header.colSpan}
      width={header.column.getSize()} // Use dynamic width here
      isPinned={isPinned}
      isDragging={isDragging}
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="descGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#292929', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#292929', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="ascGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#292929', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#292929', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <FlexContainer>
        <Text onClick={handleSortClick}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Text>
        <StyledChevronIcon sortState={sortState} />
        {header.column.getIsGrouped() ? (
          <VscUngroupByRefType style={{ cursor: 'pointer' }} onClick={() => header.column.toggleGrouping()} />
        ) : (
          <VscGroupByRefType style={{ cursor: 'pointer' }} onClick={() => header.column.toggleGrouping()} />
        )}
        <PiDotsThreeOutlineVerticalFill onClick={handleMenuToggle} style={{ cursor: 'pointer' }} />
      </FlexContainer>

      {header.column.getCanResize() && (
        <Resizer
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          onClick={stopPropagation}
        />
      )}

      {isMenuOpen && (
        <MenuList ref={menuRef}>
          {header.column.getCanGroup() && (
            <MenuItem onClick={() => header.column.toggleGrouping()}>
              {header.column.getIsGrouped() ? (
                <>
                  <VscUngroupByRefType />
                  <span>Ungroup</span>
                </>
              ) : (
                <>
                  <VscGroupByRefType />
                  <span>Group</span>
                </>
              )}
            </MenuItem>
          )}

          {header.column.getCanPin() && (
            <>
              <MenuItem onClick={() => header.column.pin('left')}>
                <RxPinLeft />
                <span>Pin to Left</span>
              </MenuItem>
              <MenuItem onClick={() => header.column.pin('right')}>
                <RxPinRight />
                <span>Pin to Right</span>
              </MenuItem>
              <MenuItem onClick={() => header.column.pin(false)}>
                <RxPinRight />
                <span>Unpin</span>
              </MenuItem>
            </>
          )}

          <MenuItem>
            <Select
              value={{ value: '', label: 'Filter column...' }}
              options={[]} // Add your filter options here
              placeholder="Filter column..."
            />
          </MenuItem>

          <MenuItem>
          <InputContainer>
                <InputIcon />
                <Input
                  placeholder={`Filter ${header.column.columnDef.header}`}
                  onChange={e => {
                    if (table) {
                      table.getColumn(header.column.id).setFilterValue(e.target.value);
                    }
                  }}
                />
              </InputContainer>
          </MenuItem>
        </MenuList>
      )}
    </StyledTh>
  );
};

export default TableHeader;
