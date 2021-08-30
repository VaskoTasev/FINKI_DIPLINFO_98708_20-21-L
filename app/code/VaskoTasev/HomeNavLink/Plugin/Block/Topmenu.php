<?php
/**
 * Copyright © Vasko Tasev All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace VaskoTasev\HomeNavLink\Plugin\Block;

use Magento\Framework\Data\Tree\NodeFactory;

class Topmenu
{

    /**
     * @var NodeFactory
     */
    protected NodeFactory $nodeFactory;

    /**
     * Initialize dependencies.
     * @param NodeFactory $nodeFactory
     */
    public function __construct(
        NodeFactory $nodeFactory
    )
    {
        $this->nodeFactory = $nodeFactory;
    }

    /**
     * Inject node into menu.
     * @param \Magento\Theme\Block\Html\Topmenu $subject
     * @param string $outermostClass
     * @param string $childrenWrapClass
     * @param int $limit
     */
    public function beforeGetHtml(
        \Magento\Theme\Block\Html\Topmenu $subject,
                                          $outermostClass = '',
                                          $childrenWrapClass = '',
                                          $limit = 0
    )
    {
        $node = $this->nodeFactory->create(
            [
                'data' => $this->getNodeAsArray(),
                'idField' => 'id',
                'tree' => $subject->getMenu()->getTree()
            ]
        );
        $subject->getMenu()->addChild($node);
    }

    /**
     * Build node.
     **/
    protected function getNodeAsArray()
    {
        return [
            'name' => __('Home'),
            'id' => 'home',
            'url' => '/',
            'has_active' => false,
            'is_active' => false
        ];
    }
}
