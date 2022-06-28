import React from 'react';
import PropTypes from 'prop-types';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useLanguage } from '../../../../hooks/useLanguage';

const CaseInfo = ({ info }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a className="case-info__link" target="blank" href={uri}>
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="case-info__title">{children}</h2>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="case-info__paragraph">{children}</p>;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="case-info__list">{children}</ul>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="case-info__list--item">{children}</li>;
      },
    },
  };
  return (
    <section className="case-info">
      <div className="case-info__content">
        {renderRichText(
          useLanguage(
            info.mainInfoUa,
            info.mainInfoEn,
            info.mainInfoIt,
            info.mainInfoRu
          ),
          options
        )}
      </div>
    </section>
  );
};

CaseInfo.propTypes = {
  info: PropTypes.object,
};

export default CaseInfo;
